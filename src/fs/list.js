import { readdir } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const files = await readdir(`${__dirname}/files`);
    files.forEach((item) => console.log(item));
  } catch {
    console.error("FS operation failed");
  }
};

await list();