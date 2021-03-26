import pt from "puppeteer";
import path from "path";
import { brs, brsCheck } from "../browser";

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

export default async ({ url, itemtag }) => {
  // url =
  //   "https://designerclub.taobao.com/category-687648887.htm?spm=a1z10.5-c-s.w4002-17136297524.92.1d73f85cEVQ0UW&_ksTS=1599810800385_212&callback=jsonp213&mid=w-17136297524-0&wid=17136297524&path=%2Fcategory-687648887.htm&search=y&catName=NEW&catId=687648887&pageNo=1#anchor";
  // itemtag = "a.item-name.J_TGoldData";
  let result = {
    url,
    itemtag,
    itemtagResult: null,
  };
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }
  const page = await brs.newPage();
  await page.goto(url);
  await page.waitForSelector(itemtag);
  let itemtagResult;
  try {
    itemtagResult = await page.evaluate(
      ({ itemtag }) => {
        let res = document.querySelectorAll(itemtag);
        console.log(res);
        res = Array.from(res).map((node) => {
          return {
            innerText: node.innerText,
            href: node.href,
          };
        });
        console.log(res);
        return res;
      },
      { itemtag }
    );
    // console.log(itemtagResult);
  } catch (error) {
    throw Error(error);
  } finally {
    await page.close();
  }

  console.log(`✔ Finished ${FILE_NAME}`);
  result.itemtagResult = itemtagResult;
  return result;
};
