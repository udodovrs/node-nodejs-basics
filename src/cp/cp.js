import { spawn } from "node:child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const spawnChildProcess = async (args) => {
  spawn("node", ["script.js", ...args], {
    cwd: `${__dirname}/files`,
    stdio: "inherit",
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([
  "Hi from child process",
  "I am child process from script.js",
  "Type CLOSE for exit",
]);
