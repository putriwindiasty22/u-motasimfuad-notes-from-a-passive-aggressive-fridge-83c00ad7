import { mkdirSync, writeFileSync } from "node:fs";

const note =
  "My door sensor counted 14 visits today. You took nothing. The yogurt from Tuesday asked me to tell you it's seeing other people now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note + "\n", "utf8");
