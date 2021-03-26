import pt from "puppeteer";
import path from "path";
import { brs, brsCheck } from "../browser";
/**
 * @param {url,commonTags} textContent
 */

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

export default async ({ url, commonTags }) => {
  let result = [];
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }
  const page = await brs.newPage();
  await page.goto(url);

  try {
    result = await page.evaluate(
      ({ commonTags }) => {
        let result = [];
        for (let i = 0; i < commonTags.length; i++) {
          const tagNode = document.querySelector(commonTags[i]);
          if (tagNode) {
            result[i] = tagNode.innerText.trim();
          }
        }
        return result;
      },
      { commonTags }
    );
  } catch (error) {
    console.error(error);
  } finally {
    await page.close();
  }
  console.log(`Finished ${FILE_NAME} ✔`, result);
  return result;
};
