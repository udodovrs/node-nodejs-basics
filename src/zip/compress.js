import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const gzip = createGzip();
const source = createReadStream(`${__dirname}/files/fileToCompress.txt`);
const destination = createWriteStream(`${__dirname}/files/archive.gz`);

const compress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await compress();
