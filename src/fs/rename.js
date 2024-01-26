import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    await fs.rename(
      `${__dirname}/files/wrongFilename.txt`,
      `${__dirname}/files/properFilename.md`
    );
  } catch {
    console.error("FS operation failed");
  }
};

await rename();