import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
const expected = [
  "incursa.spec-trace-vsce",
  "incursa.csv-contract-vsce",
  "incursa.auditable-reports-vsce",
  "incursa.database-knowledge-vsce"
];

if (JSON.stringify(pkg.extensionPack) !== JSON.stringify(expected)) {
  throw new Error(`extensionPack must exactly match ${JSON.stringify(expected)}`);
}

for (const forbidden of ["main", "browser", "activationEvents"]) {
  if (forbidden in pkg) {
    throw new Error(`Metadata-only extension pack cannot declare ${forbidden}`);
  }
}

const [readme, capability, acceptance, specification] = await Promise.all([
  readFile(path.join(root, "README.md"), "utf8"),
  readFile(path.join(root, "docs", "capability-matrix.md"), "utf8"),
  readFile(path.join(root, "docs", "acceptance-matrix.md"), "utf8"),
  readFile(path.join(root, "specs", "requirements", "incursa-tooling", "SPEC-PORTFOLIO.json"), "utf8")
]);

for (const name of [
  "SpecTrace for VS Code",
  "CSV Contract Workbench",
  "Auditable Reports for VS Code",
  "Database Knowledge Workbench"
]) {
  if (!readme.includes(name) || !capability.includes(name)) {
    throw new Error(`${name} must appear in README and capability matrix`);
  }
}

const spec = JSON.parse(specification);
for (const id of ["PORT-001", "WEB-CSV-001", "DBK-001", "RPT-001", "PACK-001", "INST-001", "SEC-001"]) {
  if (!acceptance.includes(`| ${id} |`) || !spec.requirements.some((item) => item.x_acceptance_ids?.includes(id))) {
    throw new Error(`Acceptance ${id} must be mapped in the canonical portfolio specification`);
  }
}

console.log("Verified metadata-only portfolio manifest and documentation.");
