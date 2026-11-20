const fs = require('fs');
const path = require('path');

const terms = [
  'three key roles',
  '3 key roles',
  'all 4 roles',
  'phase 02',
  'phase 2',
  'viral multiplier',
  'the growth loop',
  'ats-ready',
  'admin war room',
  'simulated',
  'nxtwave'
];

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    if (fs.statSync(full).isDirectory()) {
      searchDir(full);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        terms.forEach(t => {
          if (line.toLowerCase().includes(t.toLowerCase())) {
            console.log(`${full}:${idx + 1} -> [${t}] ${line.trim().substring(0, 100)}`);
          }
        });
      });
    }
  }
}

searchDir('./src');
