import path from "path";
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import axios from "axios";

const main = async () => {
  const res = await axios.get(
    "https://map.naver.com/v5/search/%EC%B9%B4%ED%8E%98?c=14153046.4175012,4499915.7825856,18,0,0,0,dh"
  );
  if (res.status !== 200) {
    return;
  }
  console.log(res.data);
  const $ = cheerio.load(res.data);
  const list = $("#_pcmap_list_scroll_container");
  console.log(list);
};
main();
