import { rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import AdmZip from "adm-zip";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vsixPath = path.join(root, "artifacts", "incursa-tooling-vsce.vsix");
const temporaryPath = `${vsixPath}.normalized`;
const source = new AdmZip(vsixPath);
const normalized = new AdmZip();
const fixedTimestamp = new Date(Date.UTC(2000, 0, 1, 0, 0, 0));

for (const entry of source.getEntries().sort((left, right) => left.entryName.localeCompare(right.entryName))) {
  normalized.addFile(
    entry.entryName,
    entry.isDirectory ? Buffer.alloc(0) : entry.getData(),
    entry.comment,
    entry.attr
  );
  normalized.getEntry(entry.entryName).header.time = fixedTimestamp;
}

await writeFile(temporaryPath, normalized.toBuffer());
await rename(temporaryPath, vsixPath);
console.log(`Normalized ${source.getEntries().length} VSIX entries to a fixed timestamp and order.`);
