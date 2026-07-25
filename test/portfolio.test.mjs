import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));

test("extension pack is metadata-only", () => {
  assert.equal(pkg.main, undefined);
  assert.equal(pkg.browser, undefined);
  assert.equal(pkg.activationEvents, undefined);
  assert.equal(pkg.contributes, undefined);
});

test("extension pack contains the four approved products exactly once", () => {
  assert.deepEqual(pkg.extensionPack, [
    "incursa.spec-trace-vsce",
    "incursa.csv-contract-vsce",
    "incursa.auditable-reports-vsce",
    "incursa.database-knowledge-vsce"
  ]);
  assert.equal(new Set(pkg.extensionPack).size, 4);
});

test("portfolio links are HTTPS and repository-scoped", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  assert.doesNotMatch(readme, /http:\/\/|file:\/\//i);
  for (const repo of [
    "spec-trace-vsce",
    "csv-contract-vsce",
    "auditable-reports-vsce",
    "database-knowledge-vsce"
  ]) {
    assert.match(readme, new RegExp(`https://github\\.com/incursa/${repo}`));
  }
});

