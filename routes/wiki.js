const express = require("express");
const router = express.Router();
const { addPage, wikiPage } = require("../views");
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
    
    await res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    console.log(wikiPage);
    res.send(wikiPage(page));
  } catch (error) { next(error) }

});

module.exports = router;
