//==========================
// read csv and get movie score and save CSV
//==========================

import fs from "fs";
import path from "path";
import parse from "csv-parse/lib/sync";
import stringify from "csv-stringify/lib/sync";
import axios from "axios";
import cheerio from "cheerio";

const csv = fs.readFileSync(path.join(__dirname, "../data", "movies.csv"));
const rows = parse(csv.toString("utf-8"));

let result = [];

rows.forEach(async (e, idx) => {
  try {
    const res = await axios.get(e[1]);
    if (res.status === 200) {
      const html = res.data;
      const $ = cheerio.load(html);
      let score = $("#actualPointPersentBasic > div > span > span").text();
      score = score.slice(7);
      // console.log(`${e[0]} - ${e[1]} - ${score}`);
      result[idx] = [e[0], e[1], score];
    }
  } catch (error) {
    console.error(error);
  }
  try {
    const resultFile = stringify(result);
    fs.writeFileSync("pupeeter/data/moviesListScore.csv", resultFile);
  } catch (error) {
    console.error(error);
  }
});
