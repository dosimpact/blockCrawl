//==========================
// stealth plugin , type any
//==========================

const path = require("path");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

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
  await page.goto("https://bot.sannysoft.com");
  await page.waitFor(5000);
  await page.screenshot({ path: "testresult.png", fullPage: true });
  await browser.close();
  console.log(`All done, check the screenshot. ✨`);
};
main();
