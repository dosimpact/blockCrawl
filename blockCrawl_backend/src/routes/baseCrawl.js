import { ptNurlTag, pturlTag, pturlNTag } from "../crwaling/basic";

import pturlNTagNImg from "../crwaling/basic/pturlNTagNImg";

import express from "express";

const router = express.Router();

router.post("/NurlTag", async (req, res) => {
  const { tag, urls } = req.body;
  if (
    tag === undefined ||
    typeof tag !== "string" ||
    urls === undefined ||
    !Array.isArray(urls)
  ) {
    throw Error("tag or url need");
  }
  const result = await ptNurlTag({ commonTag: tag, urls });
  return res.status(200).json({ result, success: true });
});

router.post("/urlTag", async (req, res) => {
  const { tag, url } = req.body;
  if (tag === undefined || url === undefined) {
    throw Error("tag or url need");
  }
  const result = await pturlTag({ commonTag: tag, url });
  return res.status(200).json({ result, success: true });
});

router.post("/urlNTag", async (req, res) => {
  const { tags, url } = req.body;
  // console.log(tags, url);
  if (tags === undefined || url === undefined) {
    // return new Promise.reject(new Error("tags or url need"));
    throw Error("tag or url need");
  }
  let result;
  try {
    result = await pturlNTag({ commonTags: tags, url });
  } catch (error) {
    res.status(200).json({ success: false });
  }
  return res.status(200).json({ result, success: true });
});

/*
  하나의 url에 대응해서
  여러가지 태그정보들을 입력해서 text로 반환하고 
  여러가지 태그 정보들을 입력해서 하위 자식 img 들을  찾아서 img파일로 저장한다.
*/

router.post("/urlNTagNImg", async (req, res) => {
  const { tags, url, tagsImgs } = req.body;
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

  return res.status(200).json({ result, success: true });
});

module.exports = router;
