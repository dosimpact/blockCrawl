// 기본적인 브라우져 런치
// import pt from "puppeteer";
import path from "path";
import pt from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
pt.use(StealthPlugin());

let brs = null;
let error = null;

const init = async () => {
  try {
    brs = await pt.launch({
      headless: process.env.HEAD_LESS === "false" ? false : true,
      userDataDir: `${path.join(__dirname, "../../", "User Data")}`,
      args: [
        "--no-sandbox",
        `--window-size=${process.env.BRS_WIDTH},${process.env.BRS_HEIGHT}`,
        "--disable-notifications",
      ],
    });
    console.log("✔ puppeteer is running");
  } catch (e) {
    error = e;
  }
};

const reLaunch = async () => {
  try {
    if (brs) await brs.close();
    brs = await pt.launch({
      headless: HEAD_LESS,
      args: [
        "--no-sandbox",
        "--window-size=1920,1080",
        "--disable-notifications",
      ],
    });
    console.log("✔ puppeteer is reLuanched ");
    error = null;
  } catch (e) {
    console.error("Error: brs reLuanch Fail ");
    error = e;
  }
};

const brsCheck = async () => {
  if (error) {
    try {
      console.error("br reLuanch...");
      await reLaunch();
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
  return true;
};

// 리턴, 인스턴스 자체. 브라우져, 재실행
init();
export { brs, error, init, reLaunch, brsCheck };
