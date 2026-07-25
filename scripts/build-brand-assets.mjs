import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

await Promise.all([
  sharp(path.join(root, "images", "icon-master.svg"))
    .resize(128, 128)
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(root, "images", "icon.png")),
  sharp(path.join(root, "images", "banner-master.svg"))
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(root, "images", "banner.png")),
  sharp(await readFile(path.join(root, "images", "brand-sheet.svg")))
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(root, "images", "brand-sheet.png"))
]);

console.log("Built Incursa Tooling brand assets.");

