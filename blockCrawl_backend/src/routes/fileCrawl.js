import { pturlCapture, pturlPDF } from "../crwaling/image";
import express from "express";
import checkPublicFile from "../utils/checkPublic";
import removeFile from "../utils/removeFile";

const REMOVE_FILE_TIME = process.env.REMOVE_FILE_TIME || 30000;
const router = express.Router();

router.post("/urlCapture", async (req, res) => {
  let result = null;
  const { url, fullShot = false } = req.body;
  if (url === undefined) {
    throw Error("url need");
  }
  checkPublicFile();
  try {
    result = await pturlCapture({ url, fullShot });
  } catch (error) {
    throw Error(`ERROR: urlCapture fail${error}`);
  }
  setTimeout(() => {
    removeFile(res);
  }, REMOVE_FILE_TIME);

  return res.status(200).json({ result, success: true });
});

router.post("/urlPDF", async (req, res) => {
  let result = null;
  const { url } = req.body;
  if (url === undefined) {
    throw Error("tag or url need");
  }
  checkPublicFile();
  try {
    result = await pturlPDF({ url });
  } catch (error) {
    throw Error(`ERROR: urlCapture fail ${error}`);
  }
  setTimeout(() => {
    removeFile(res);
  }, REMOVE_FILE_TIME);
  return res.status(200).json({ result, success: true });
});

module.exports = router;
