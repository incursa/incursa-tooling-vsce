import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import AdmZip from "adm-zip";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vsix = path.join(root, "artifacts", "incursa-tooling-vsce.vsix");
const archive = new AdmZip(vsix);
const entries = archive.getEntries().map((entry) => entry.entryName);
const manifestEntry = archive.getEntry("extension/package.json");

if (!manifestEntry) {
  throw new Error("VSIX is missing extension/package.json");
}

const manifestMode = (manifestEntry.attr >>> 16) & 0o777;
if (manifestMode !== 0o644) {
  throw new Error(
    `VSIX extension/package.json must be writable by its owner (expected mode 0644, found 0${manifestMode.toString(8)})`
  );
}

const manifest = JSON.parse(manifestEntry.getData().toString("utf8"));
if (manifest.publisher !== "incursa" || manifest.name !== "incursa-tooling-vsce") {
  throw new Error("VSIX identity does not match incursa.incursa-tooling-vsce");
}
if (manifest.main || manifest.browser || manifest.activationEvents) {
  throw new Error("VSIX is not metadata-only");
}
if (entries.some((entry) => /\.(?:c?js|mjs)$/i.test(entry) && entry.startsWith("extension/dist/"))) {
  throw new Error("VSIX unexpectedly contains runtime bundles");
}

const report = {
  identity: `${manifest.publisher}.${manifest.name}`,
  version: manifest.version,
  extensionPack: manifest.extensionPack,
  manifestMode: `0${manifestMode.toString(8)}`,
  entryCount: entries.length,
  entries
};
await import("node:fs/promises").then(({ writeFile }) =>
  writeFile(path.join(root, "artifacts", "VSIX-CONTENTS.json"), `${JSON.stringify(report, null, 2)}\n`)
);

console.log(`Inspected ${report.identity}@${report.version} (${entries.length} entries).`);
