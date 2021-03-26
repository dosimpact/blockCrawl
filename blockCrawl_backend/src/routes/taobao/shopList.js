import ptShopList from "../../crwaling/taobao/ptShopList";
import ptShopCategory from "../../crwaling/taobao/ptShopCategory";
import express from "express";

const router = express.Router();

router.post("/taobaoList", async (req, res) => {
  const { itemtag, url } = req.body;
  if (
    url === undefined ||
    typeof url !== "string" ||
    itemtag === undefined ||
    typeof itemtag !== "string"
  ) {
    throw Error("itemtag or url need");
  }
  const result = await ptShopList({ url, itemtag });
  return res.status(200).json({ result, success: true });
});

router.post("/taobaoShopCategory", async (req, res) => {
  const { url } = req.body;
  if (url === undefined || typeof url !== "string") {
    return res.status(400).json({ success: false, message: "url is needed" });
  }
  const result = await ptShopCategory({ url });
  return res.status(200).json({ result, success: true });
});

module.exports = router;
