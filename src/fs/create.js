import { writeFile } from "node:fs/promises";

const dirURL = new URL("./files", import.meta.url);
const pathNewFile = dirURL.pathname.slice(1);

const create = async () => {
  try {
    await writeFile(`${pathNewFile}/fresh.txt`, "I am fresh and young", {
      flag: "wx",
    });
  } catch {
    console.error("FS operation failed");
  }
};

await create();