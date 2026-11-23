// Warning Label for Humans: One Line, Big Laugh
// Writes a single deterministic warning-label line to /output/entry.txt.
// No randomness, no network, no input: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Contents may suddenly remember an embarrassing thing from 2007 and go quiet for the rest of the evening.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} characters to /output/entry.txt`);
