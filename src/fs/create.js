import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  try {
    await writeFile(`${__dirname}/files/fresh.txt`, "I am fresh and young", {
      flag: "wx",
    });
  } catch {
    console.error("FS operation failed");
  }
};

await create();