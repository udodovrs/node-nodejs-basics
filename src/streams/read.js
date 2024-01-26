import { createReadStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
 createReadStream(`${__dirname}/files/fileToRead.txt`).pipe(process.stdout);
};

await read();