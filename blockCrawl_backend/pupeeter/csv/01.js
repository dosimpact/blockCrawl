//==========================
// csv read and write index
//==========================

import fs from "fs";
import parse from "csv-parse/lib/sync";
import stringify from "csv-stringify/lib/sync";
import path from "path";

console.log(path.join(__dirname, "../data", "movies.csv"));

let result = [];
const csv = fs.readFileSync(path.join(__dirname, "../data", "movies.csv"));
const rows = parse(csv.toString("utf-8"));
// console.log(rows);

Array.from(rows).forEach((row, idx) => {
  // console.log(row);
  result[idx] = [idx, row[0], row[1]];
});
console.log(result);
const resultFile = stringify(result);
fs.writeFileSync("pupeeter/data/moviesListIndex.csv", resultFile);
