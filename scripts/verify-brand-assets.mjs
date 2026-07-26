import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const expected = [
  ["images/icon.png", 128, 128],
  ["images/banner.png", 1200, 320],
  ["images/brand-sheet.png", 1400, 900]
];

for (const [relative, width, height] of expected) {
  const file = path.join(root, relative);
  await access(file);
  const metadata = await sharp(file).metadata();
  if (metadata.width !== width || metadata.height !== height) {
    throw new Error(`${relative} must be ${width}x${height}; found ${metadata.width}x${metadata.height}`);
  }
}

const activity = await readFile(path.join(root, "resources", "incursa-tooling.svg"), "utf8");
if (!activity.includes("currentColor") || /#[0-9a-f]{3,8}/i.test(activity)) {
  throw new Error("The activity-bar asset must be monochrome and theme-driven.");
}

console.log("Verified Incursa Tooling brand assets.");

