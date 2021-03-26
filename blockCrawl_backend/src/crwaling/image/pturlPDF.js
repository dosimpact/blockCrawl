import pt from "puppeteer";
import { PUBLIC_DIR } from "../../utils/checkPublic";
import path from "path";
import { brs, brsCheck } from "../browser";

/**
 * @param {url,commonTag} textContent
 */

const FILE_NAME = path.basename(__filename);
let FILE_NAME_ID = null;

const pturlCapture = async ({ url }) => {
  let fileName = null;

  if (!brsCheck()) {
    throw Error("Error: brs instance No found");
  }

  if (!url) {
    throw Error("ERROR: url Is NULL");
  }
  const page = await brs.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  try {
    await page.goto(url, { waitUntil: "networkidle0" });

    const pageTitle = await page.title();
    fileName = `${pageTitle}_${Date.now()}.pdf`;
    const fileURL = path.join(PUBLIC_DIR, fileName);
    await page.pdf({
      path: fileURL,
      printBackground: true,
      format: "A4",
    });
  } catch (error) {
    console.log(`ERROR: in ${FILE_NAME}`);
    throw Error(`ERROR: PDF capture Fail ${error}`);
  } finally {
    await page.close();
  }

  console.log(`Finished ${FILE_NAME} ✔`, fileName);
  return fileName;
};
export default pturlCapture;
