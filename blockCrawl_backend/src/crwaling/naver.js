import pt from "puppeteer";

const crawler = async () => {
  try {
    const brs = await pt.launch({ headless: true, args: ["--no-sandbox"] });
    const page = await brs.newPage();
    await page.goto(
      "https://search.naver.com/search.naver?where=nexearch&query=%EB%82%A0%EC%94%A8&ie=utf8&sm=tab_she&qdt=0"
    );
    const dustInfo = await page.evaluate(() => {
      const dustEl = document.querySelector(
        `#main_pack > div.sc.cs_weather._weather > div:nth-child(2) > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.sub_info > div > dl > dd:nth-child(2) > span.num`
      );
      return dustEl.innerText.trim();
    });
    page.close();
    brs.close();
    return dustInfo;
  } catch (error) {
    console.error(error);
    return "fail";
  }
};

const naver = () => {
  return new Promise(async (res, rej) => {
    try {
      console.log("START crawler");
      const dust = await crawler();
      res(`naver crawler started -> ${dust}`);
    } catch {
      rej("ERROR:naver.js");
    }
  });
};

export default naver;
