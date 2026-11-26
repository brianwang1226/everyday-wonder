// Everyday Wonder — a make.fun one-liner entry.
// The wonder of an ordinary morning: kettle and toast in perfect sync,
// until the smoke alarm joins in with applause. The entry finds the
// marvellous inside the mundane — a kitchen that briefly behaves like
// a stage, with the smoke alarm as its one-person audience.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My kettle clicks off exactly when the toast pops up, and for one second the whole kitchen feels like it was choreographed. Then the smoke alarm applauds.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
