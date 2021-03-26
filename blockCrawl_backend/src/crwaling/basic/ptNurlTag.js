import pt from "puppeteer";
import { brs, brsCheck } from "../browser";
import path from "path";
/**
 * @param {urls,commonTag} textContent
 */
const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

export default async ({ urls, commonTag }) => {
  //------------------------------------------------
  const result = new Array(urls.length);
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }
  await Promise.all(
    urls.map(async (e, idx) => {
      const page = await brs.newPage();
      await page.goto(e);
      try {
        const text = await page.evaluate(
          ({ commonTag }) => {
            const score = document.querySelector(commonTag);
            if (score) {
              return score.innerText;
            }
          },
          { commonTag }
        );
        result[idx] = text.trim();
      } catch (error) {
        console.error(error);
      } finally {
        await page.close();
      }
    })
  );
  console.log(`Finished ${FILE_NAME} ✔`, result);
  return result;
};
