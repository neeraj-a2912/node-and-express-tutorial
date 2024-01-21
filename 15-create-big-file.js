const { writeFileSync } = require("fs");

for (let i = 1; i <= 100; i++) {
  writeFileSync("./content/big.txt", `Neeraj ALoney ${i}\n`, { flag: "a" });
}
