import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("HI");
  res.json({ mesg: "hi", userList: ["doyung", "tjsdh", "wlsgh"] });
});

router.get("/error", (req, res) => {
  throw Error("DIE");
});

module.exports = router;
