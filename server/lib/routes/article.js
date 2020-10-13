const express = require("express");
const router = express.Router();

const Article = require("../models/article_model");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.get("/:id", (req, res) => {
  res.send(req.params);
});

router.post("/", (req, res) => {
  const body = req.body;
  // const article = new Article({
  //   author: body.author,
  //   title: body.title,
  //   // publishDT: Date.now(),
  //   content: "first Article",
  // });
  // res.send(article);
  res.send(req.body);
});

module.exports = router;
