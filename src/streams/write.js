import { createWriteStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const writeble = createWriteStream(`${__dirname}/files/fileToWrite.txt`, {
  flags: "a",
});

const write = async () => {
  process.stdin.pipe(writeble);
};

await write();
