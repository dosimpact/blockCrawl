import express from "express";
import path from "path";
import pturlNTagNImg from "../crwaling/basic/pturlNTagNImg";
import {
  saveWithImageURL,
  checkFolder,
  saveToCSVNamed,
} from "../crwaling/saveFile/saveUtils";

const router = express.Router();

router.post("/urlNTagNImg", async (req, res) => {
  const { tagsName, tags, url, tagsImgs } = req.body;
  // console.log(tags, url);
  if (tags === undefined || url === undefined) {
    // return new Promise.reject(new Error("tags or url need"));
    throw Error("tag or url need (tagsImgs optional)");
  }
  let result;
  try {
    result = await pturlNTagNImg({ commonTags: tags, url, tagsImgs });
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false });
  }
  /*
   get 상품 id
  */
  let folderName;
  try {
    folderName = new URL(url).searchParams.get("id");
  } catch (error) {
    throw Error("url id is not appeared");
  }
  await checkFolder(folderName);
  /*
    URL PARSER
  */
  for (let [i, _tags] of result.tagsImgs_result.entries()) {
    for (let [j, __tags] of _tags.entries()) {
      const ptn = /_50x50.jpg_.webp/gi;
      if (ptn.test(__tags)) {
        result.tagsImgs_result[i][j] = __tags.replace(ptn, "");
      }
    }
  }

  /*
    Image DownLoad 
  */
  for (let [idx, _tags] of result.tagsImgs_result.entries()) {
    await Promise.all(
      _tags.map((e) => {
        return saveWithImageURL(e, folderName, path.basename(e));
      })
    );
  }
  /*
    CSV Save 
  */
  await saveToCSVNamed(tagsName, [result.text_result], folderName);
  return res.status(200).json({ result, success: true });
});

module.exports = router;
