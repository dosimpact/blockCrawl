import pt from "puppeteer";
import path from "path";
import { brs, brsCheck } from "../browser";
/**
 * @param {url,commonTag} textContent
 */

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

export default async ({ url, commonTag }) => {
  let result = null;
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }
  const page = await brs.newPage();
  await page.goto(url);

  try {
    const text = await page.evaluate(
      ({ commonTag }) => {
        const tagNode = document.querySelector(commonTag);
        if (tagNode) {
          return tagNode.innerText;
        }
      },
      { commonTag }
    );
    result = text.trim();
  } catch (error) {
    console.error(error);
  } finally {
    await page.close();
  }

  console.log(`Finished ${FILE_NAME} ✔`, result);
  return result;
};
