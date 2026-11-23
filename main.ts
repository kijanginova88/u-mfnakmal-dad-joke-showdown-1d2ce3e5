import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original dad joke for the Dad Joke Showdown bounty.
// The joke is a single line, at most 200 characters, with a clean pun
// that lands at the end and reads naturally out loud.
const JOKE =
  "I opened a bakery that only sells bread shaped like shoes. Business is rising, but the loafers keep walking out.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
