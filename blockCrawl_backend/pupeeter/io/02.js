//==========================
// input multiple lines - example
//==========================

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let cnt = 0;

const printMesg = () => {
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`enter your comment [${cnt}] : `);
  cnt += 1;
};
printMesg();
rl.on("line", function (line) {
  input.push(line);
  printMesg();
}).on("close", function () {
  input.forEach((i, n) => {
    console.log(` comment[${n}] is ${i} `);
  });
  process.exit();
});
