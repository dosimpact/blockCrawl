import pt from "puppeteer";
import path from "path";
import { brs, brsCheck } from "../browser";
/**
 * @param {url,commonTags} textContent
 */

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

/*
https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-17136297531.10.5d5f3ae4VQIkND&id=601988445577



*/
export default async ({ commonTags, url, tagsImgs }) => {
  let result = {
    url,
    text_tag: commonTags,
    text_result: null,
    tagsImgs,
    tagsImgs_result: null,
    tagsImgs_path: null,
  };
  let text_result = [];
  let tagsImgs_result = [];
  // console.log("pturlNTagNImg", result);
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }
  const page = await brs.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  const pageH = await page.evaluate(() => {
    return document.body.scrollHeight;
  });
  // console.log("pageH", pageH);
  for (let i = 0; i <= Number(pageH / 1000); i++) {
    await page.evaluate(
      ({ i }) => {
        window.scrollTo(0, i * 1000);
      },
      { i }
    );
    await page.waitFor(200);
  }

  try {
    text_result = await page.evaluate(
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

    tagsImgs_result = await page.evaluate(
      ({ tagsImgs }) => {
        let result = [];
        for (let i = 0; i < tagsImgs.length; i++) {
          const tagNode = document.querySelector(tagsImgs[i]);
          if (tagNode) {
            result[i] = Array.from(tagNode.querySelectorAll("img")).map(
              (tag) => tag?.src
            );
            // result[i] = tagNode.querySelectorAll("img");
          }
        }
        return result;
      },
      { tagsImgs }
    );
    // console.log("tagsImgs_result", tagsImgs_result);
  } catch (error) {
    throw Error(error);
  } finally {
    await page.close();
  }

  result.text_result = text_result;
  result.tagsImgs_result = tagsImgs_result;
  console.log(`✔ Finished ${FILE_NAME}`);
  return result;
};
