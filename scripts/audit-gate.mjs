// Dependency-scan gate (QG-010 / BL-08): fail only on NEW high/critical
// advisories, i.e. those not recorded in the baseline file.
// Usage: node scripts/audit-gate.mjs            (runs `npm audit --json`)
//        node scripts/audit-gate.mjs <file.json> (reads saved audit output)
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const BASELINE = new URL(
  '../.github/security/npm-audit-baseline.json',
  import.meta.url,
);
const GATED = new Set(['high', 'critical']);

function loadAudit(input) {
  if (input) return JSON.parse(readFileSync(input, 'utf8'));
  let out;
  try {
    out = execSync('npm audit --json', {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
  } catch (error) {
    out = error.stdout; // npm audit exits non-zero when it finds anything
  }
  return JSON.parse(out);
}

const audit = loadAudit(process.argv[2]);
if (audit.error || !audit.vulnerabilities) {
  console.error(
    'audit-gate: npm audit did not return a result; cannot verify.',
  );
  console.error(JSON.stringify(audit.error ?? audit.message ?? audit));
  process.exit(2);
}

const known = new Set(
  JSON.parse(readFileSync(BASELINE, 'utf8')).advisories.map((a) => a.url),
);
const found = new Map();
for (const vuln of Object.values(audit.vulnerabilities)) {
  for (const via of vuln.via) {
    if (typeof via === 'object' && via.url)
      found.set(via.url, { ...via, package: via.name });
  }
}

const fresh = [...found.values()].filter((a) => !known.has(a.url));
const blocking = fresh.filter((a) => GATED.has(a.severity));
console.log(
  `audit-gate: ${found.size} advisories, ${found.size - fresh.length} baselined, ${fresh.length} new, ${blocking.length} new high/critical.`,
);
for (const a of fresh) {
  console.log(`  NEW ${a.severity} ${a.package}: ${a.title} ${a.url}`);
}
process.exit(blocking.length > 0 ? 1 : 0);
