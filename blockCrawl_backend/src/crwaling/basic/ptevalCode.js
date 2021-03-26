import pt from "puppeteer";
import path from "path";
import { brs, brsCheck } from "../browser";
/**
 * @param {url,commonTag} textContent
 */

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

const CODE_TEXT = `
// Get Selector
const text = await page.evaluate(
  ({ commonTag }) => {
    const tagNode = document.querySelector(commonTag);
    if (tagNode) {
      return tagNode.textContent;
    }
  },
  { commonTag }
);
console.log(text)
result = text.trim();
ServerResult.results.push(result);
`;

const CODE_TEXT_2 = `
let url = "https://movie.naver.com/movie/bi/mi/basic.nhn?code=189537";
let commonTag =
  "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)";
let ServerResult = {
  codes: [],
  results: [],
};
console.log(url);
console.log(commonTag);

let result = null;
if (!brsCheck()) {
  throw Error("Error: brs instance No found");
}
console.log("error is ok!")
  `;
function say() {
  console.log("yoo");
}

export default async ({ code }) => {
  console.log("input code is", code);

  eval(`console.log("hi")`);
  eval(CODE_TEXT_2);

  let url = "https://movie.naver.com/movie/bi/mi/basic.nhn?code=187321";
  let commonTag =
    "#content > div.article > div.mv_info_area > div.mv_info > h3 > a:nth-child(1)";
  let ServerResult = {
    codes: [],
    results: [],
  };

  let result = null;
  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }
  console.log("error is ok!");
  ///=======///=======///=======///====== DANGER EVAL SPACE///=======///=======///=======///=======///=======///=======
  // Go To Page
  const page = await brs.newPage();
  await page.goto(url);

  try {
    // Get Selector
    const text = await page.evaluate(
      ({ commonTag }) => {
        const tagNode = document.querySelector(commonTag);
        if (tagNode) {
          return tagNode.innerText;
        }
      },
      { commonTag }
    );
    console.log(text);
    result = text.trim();
    ServerResult.results.push(result);
  } catch (error) {
    console.error(error);
  } finally {
    await page.close();
  }

  console.log(`Finished ${FILE_NAME} ✔`);
  return JSON.stringify(ServerResult);
};
