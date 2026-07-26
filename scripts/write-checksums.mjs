import { createHash } from "node:crypto";
import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const artifacts = path.join(root, "artifacts");
const filename = "incursa-tooling-vsce.vsix";
const bytes = await readFile(path.join(artifacts, filename));
const size = (await stat(path.join(artifacts, filename))).size;
const hash = createHash("sha256").update(bytes).digest("hex");

await writeFile(path.join(artifacts, "SHA256SUMS.txt"), `${hash}  ${filename}\n`);
await writeFile(
  path.join(artifacts, "PACKAGE-INFO.json"),
  `${JSON.stringify({ filename, bytes: size, sha256: hash }, null, 2)}\n`
);
console.log(`${filename} ${size} bytes sha256=${hash}`);

