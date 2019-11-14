const express = require("express");
const router = express.Router();
const { addPage } = require("../views");
const { Page, User } = require("../models/");

// /wiki
router.get("/", async (req, res) => {
  res.send("got to GET /wiki");
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status
    });
    console.log("PAGE LOOKS LIKE: ", page);
    await res.redirect(`/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

router.get("/:slug", (req, res, next) => {
  res.send(`hit dynamic route at ${req.params.slug}`);
});

module.exports = router;
