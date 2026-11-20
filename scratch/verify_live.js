const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function verify() {
  const routes = [
    'https://ai-campus-growth-engine.vercel.app/',
    'https://ai-campus-growth-engine.vercel.app/deck',
    'https://ai-campus-growth-engine.vercel.app/submission',
    'https://ai-campus-growth-engine.vercel.app/admin/dashboard',
    'https://ai-campus-growth-engine.vercel.app/admin/simulator'
  ];

  for (const url of routes) {
    try {
      const res = await fetchUrl(url);
      console.log(`\n========================================`);
      console.log(`URL: ${url} (HTTP ${res.statusCode})`);
      
      const checks = [
        { label: 'SIMULATED banner/badge', regex: /SIMULATED/i },
        { label: 'Realized CAC (5.85)', regex: /5\.85/ },
        { label: 'Target CAC (4.00)', regex: /4\.00/ },
        { label: 'Day 4 Benchmark (286)', regex: /286/ },
        { label: 'Ahead of pacing (+56)', regex: /56/ },
        { label: 'Sub-Viral / 2.63x', regex: /(sub-viral|2\.63)/i },
        { label: '12 Ambassadors / Leads', regex: /12\s+(ambassador|leads|campuses)/i }
      ];

      for (const check of checks) {
        const found = check.regex.test(res.data);
        console.log(`  [${found ? 'PASS' : 'WARN'}] ${check.label}`);
      }
    } catch (err) {
      console.error(`Error fetching ${url}:`, err.message);
    }
  }
}

verify();
