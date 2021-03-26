//==========================
// read csv and get movie title
//==========================

import fs from "fs";
import path from "path";
import parse from "csv-parse/lib/sync";
import stringify from "csv-stringify";
import axios from "axios";
import cheerio from "cheerio";

const csv = fs.readFileSync(path.join(__dirname, "./data", "data.csv"));
const rows = parse(csv.toString("utf-8"));

rows.forEach(async (e) => {
  try {
    const res = await axios.get(e[1]);
    if (res.status === 200) {
      const html = res.data;
      const $ = cheerio.load(html);
      const text = $(
        "#content > div.article > div.mv_info_area > div.mv_info > h3 > a"
      ).text();
      console.log(text.trim());
    }
  } catch (error) {
    console.error(error);
  }
});
