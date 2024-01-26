import { Transform } from "node:stream";

const stream = new Transform({
  transform(chunk, enc, cb) {
    const reverseChunk = chunk.toString().trim().split("").reverse().join("");
    enc = "utf8";
    cb(null, reverseChunk);
  },
});

const transform = async () => {
  process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();