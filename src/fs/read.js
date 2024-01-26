import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const content = await readFile(`${__dirname}/files/fileToRead.txt`, {
      encoding: "utf8",
    });
    console.log(content);
  } catch {
    console.error("FS operation failed");
  }
};

await read();