import fs from "fs";
import parse from "csv-parse/lib/sync";
import path from "path";

// console.log(__dirname);
// console.log(path.join(__dirname));

// console.log(path.join(__dirname, "../data"));
console.log(path.join(__dirname, "../data", "movies.csv"));

const csv = fs.readFileSync(path.join(__dirname, "../data", "movies.csv"));
// console.log(csv);
const rows = parse(csv.toString("utf-8"));
console.log(rows);
