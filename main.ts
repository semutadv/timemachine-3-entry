// Funniest Time Machine Warning — batch3 entry (timemachine)
// A warning label that knows exactly what you were planning,
// because the last traveller planned it too.
// Writes the label to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WARNING_LABEL =
  "WARNING: Do not travel to 2020 to 'fix things'. The warranty, like causality, is void once opened.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), WARNING_LABEL, "utf8");
}

main();
