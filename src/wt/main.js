import { Worker } from "node:worker_threads";
import os from "node:os";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const numberCpuCores = os.cpus().length;

const performCalculations = async () => {
  const result = [];

  for (let i = 0; i < numberCpuCores; i++) {
    const worker = new Worker(`${__dirname}/worker.js`, { workerData: i + 10 });

    worker.on("message", (data) => {
      result.push({ status: "resolved", data });
      if (result.length === numberCpuCores) {
        console.log(result);
      }
    });

    worker.on("error", () => {
      result.push({ status: "error", data: null });
      if (result.length === numberCpuCores) {
        console.log(result);
      }
    });
  }
};

await performCalculations();