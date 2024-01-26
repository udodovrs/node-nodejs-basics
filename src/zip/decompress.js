import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const unzip = createUnzip();
const source = createReadStream(`${__dirname}/files/archive.gz`);
const destination = createWriteStream(`${__dirname}/fileToCompress.txt`);

const decompress = async () => {
  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await decompress();
