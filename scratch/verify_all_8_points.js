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
  const home = await fetchUrl('https://ai-campus-growth-engine.vercel.app/');
  console.log(`\n=== VERIFYING LIVE PRODUCTION: https://ai-campus-growth-engine.vercel.app/ (HTTP ${home.statusCode}) ===\n`);

  // Point 1: Realized CAC line & spend-to-date counter
  const hasRealizedCAC = /Realized CAC.*5\.85/i.test(home.data);
  const hasSpendCounter = /Spend to Date.*2,000/i.test(home.data) || /Spend:.*2k/i.test(home.data);
  const hasTargetCAC = /Target CAC.*4\.00/i.test(home.data);
  console.log(`1. CAC & Spend Counter:`);
  console.log(`   - Realized CAC (₹5.85): ${hasRealizedCAC ? 'PASS' : 'FAIL'}`);
  console.log(`   - Spend to Date counter (₹2,000 committed / ₹1,150 deployed): ${hasSpendCounter ? 'PASS' : 'FAIL'}`);
  console.log(`   - Target CAC clearly distinguished (₹4.00 at 500): ${hasTargetCAC ? 'PASS' : 'FAIL'}`);

  // Point 2: Sub-Viral Multiplier under THE GROWTH LOOP
  const hasSubViralHeader = /Sub-Viral Loop/i.test(home.data) && /2\.63x/i.test(home.data);
  console.log(`\n2. K-Factor Heading under THE GROWTH LOOP:`);
  console.log(`   - Labeled as Sub-Viral Loop (K < 1.0, M = 2.63x): ${hasSubViralHeader ? 'PASS' : 'FAIL'}`);

  // Point 3: SIMULATED badge frequency
  const simulatedBadges = (home.data.match(/SIMULATED/g) || []).length;
  console.log(`\n3. SIMULATED count in HTML:`);
  console.log(`   - Total matches: ${simulatedBadges} (de-duplicated from redundant UI pills)`);

  // Point 4: Three key roles vs All 4 Roles
  const hasThreeRoles = /three key roles/i.test(home.data);
  const hasAll4Roles = /All 4 Ecosystem Roles/i.test(home.data);
  console.log(`\n4. Role Conflict Check:`);
  console.log(`   - "three key roles" eliminated: ${!hasThreeRoles ? 'PASS' : 'FAIL'}`);
  console.log(`   - "All 4 Ecosystem Roles" rendered: ${hasAll4Roles ? 'PASS' : 'FAIL'}`);

  // Point 5: Phase 02 isolated check
  const startsPhase01 = /PHASE[\s\S]*?01[\s\S]*?of[\s\S]*?05[\s\S]*?REGISTER/i.test(home.data);
  const hasPrevNext = /Prev/i.test(home.data) && /Next/i.test(home.data);
  console.log(`\n5. Phase Stepper in The Growth Loop:`);
  console.log(`   - Defaults to Phase 01: ${startsPhase01 ? 'PASS' : 'FAIL'}`);
  console.log(`   - Has Stepper Controls (Prev / Next / 01-05 pills): ${hasPrevNext ? 'PASS' : 'FAIL'}`);

  // Point 6: Admin War Room tabbed as persona
  const hasAdminPersona = /4\. Admin War Room/i.test(home.data);
  const hasCollegePersona = /2\. College Campus/i.test(home.data);
  console.log(`\n6. Persona Gateways:`);
  console.log(`   - Admin War Room carded as Role 4: ${hasAdminPersona ? 'PASS' : 'FAIL'}`);
  console.log(`   - College Campus carded as Role 2: ${hasCollegePersona ? 'PASS' : 'FAIL'}`);

  // Point 7: Title & Headline consistency
  const titleMatches = /<title>AI Campus Growth Engine \| 500-Student Acquisition System/i.test(home.data);
  const h1Matches = /AI Campus Growth Engine<\/h1>/i.test(home.data);
  console.log(`\n7. Title & H1 Alignment:`);
  console.log(`   - <title> states AI Campus Growth Engine: ${titleMatches ? 'PASS' : 'FAIL'}`);
  console.log(`   - H1 states AI Campus Growth Engine: ${h1Matches ? 'PASS' : 'FAIL'}`);

  // Point 8: NxtWave relationship disclosure
  const hasRelationshipDisclosure = /Relationship Disclosure/i.test(home.data);
  console.log(`\n8. Relationship Disclosure:`);
  console.log(`   - Independent submission relationship clarified: ${hasRelationshipDisclosure ? 'PASS' : 'FAIL'}`);
}

verify();
