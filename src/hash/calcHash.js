import { createReadStream } from "node:fs";
import { Transform } from "node:stream";
import { createHash } from "node:crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const hash = createHash("sha256");

const transformStream = new Transform({
  transform(chunk, enc, cb) {
    const getHash = hash.update(chunk).digest("hex");
    enc = "utf8";
    cb(null, getHash);
  },
});

const readebleStream = createReadStream(
  `${__dirname}/files/fileToCalculateHashFor.txt`
);

const calculateHash = async () => {
  readebleStream.pipe(transformStream).pipe(process.stdout);
};

await calculateHash();