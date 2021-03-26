//==========================
// stealth plugin , type any
//==========================

// const path = require("path");
// const puppeteer = require("puppeteer-extra");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// puppeteer.use(StealthPlugin());

import path from "path";
import puppeteer from "puppeteer";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: `${path.join(__dirname, "../", "User Data")}`,
    args: [
      "--no-sandbox",
      `--window-size=${1080},${720}`,
      "--disable-notifications",
    ],
  });
  console.log("Running tests..");
  const page = await browser.newPage();
  await page.goto(
    "https://map.naver.com/v5/search/%EC%B9%B4%ED%8E%98?c=14153046.4175012,4499915.7825856,18,0,0,0,dh",
    {
      waitUntil: "networkidle2",
    }
  );
  //   await page.screenshot({ path: "testresult.png", fullPage: true });
  const res = await page.evaluate(() => {
    const list = document.querySelector("#_pcmap_list_scroll_container > ul");
    return list;
  });
  console.log(res);
  await page.waitFor(5000);
  await browser.close();
};
main();
