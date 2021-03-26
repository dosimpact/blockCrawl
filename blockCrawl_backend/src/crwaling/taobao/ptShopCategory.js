import pt from "puppeteer";
import path from "path";
import { brs, brsCheck } from "../browser";

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

export default async ({ url }) => {
  let result = {
    url,
    catagoryResult,
  };
  // const el = {
  //   name:"2020 / 09/21",
  //   href:"http....",
  // }
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }
  const page = await brs.newPage();
  await page.goto(url);
  let catagoryResult;
  try {
    catagoryResult = await page.evaluate(() => {
      const nodelist = document.querySelectorAll("a.cat-name.snd-cat-name");
      res = Array.from(nodelist).map((node) => {
        return {
          innerText: node.innerText,
          href: node.href,
        };
      });
      return res;
    });
    // console.log(catagoryResult);
  } catch (error) {
    throw Error(error);
  } finally {
    await page.close();
  }
  console.log(`✔ Finished ${FILE_NAME}`);
  result.catagoryResult = catagoryResult;
  return result;
};
