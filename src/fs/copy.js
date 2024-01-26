import { cp } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    await cp(`${__dirname}/files`, `${__dirname}/files_copy`, {    
      recursive: true,
      errorOnExist: true,
      force: false
    });
  } catch {
    console.error("FS operation failed");
  }
};

await copy();
