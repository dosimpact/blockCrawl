//==========================
// csv read and write index example review comment
//==========================

import fs from "fs";
import parse from "csv-parse/lib/sync";
import stringify from "csv-stringify/lib/sync";
import path from "path";

let result = [];
const csv = fs.readFileSync(path.join(__dirname, "../data", "movies.csv"));
const rows = parse(csv.toString("utf-8"));

for (const [title, url] of rows) {
}

// console.log(result);
const resultFile = stringify(result);
fs.writeFileSync("pupeeter/data/moviesListIndex.csv", resultFile);
