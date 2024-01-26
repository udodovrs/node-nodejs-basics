import { unlink } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  try {
    await unlink(`${__dirname}/files/fileToRemove.txt`);    
  } catch {
    console.error("FS operation failed");
  }
};

await remove();