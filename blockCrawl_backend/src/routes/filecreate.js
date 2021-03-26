import express from "express";

const router = express.Router();

router.get("/csv", (req, res) => {
  const { url } = req.body;
  res.json({ mesg: "hi", userList: ["doyung", "tjsdh", "wlsgh"] });
});

router.get("/error", (req, res) => {
  throw Error("DIE");
});

module.exports = router;
