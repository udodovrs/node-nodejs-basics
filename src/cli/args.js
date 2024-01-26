const parseArgs = () => {
  process.argv.forEach((item, index) => {
    if (item.includes("--") && index <= process.argv.length) {
      const preparedArg = item.slice(2) + " is " + process.argv[index + 1];
      console.log(preparedArg);
    }
  });
};

parseArgs();