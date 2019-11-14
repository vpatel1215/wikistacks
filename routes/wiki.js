const express = require("express");
const router = express.Router();
const { addPage } = require("../views");
const {Page, User} = require('../models/')

// /wiki
router.get("/", async (req, res) => {
  res.send('got to GET /wiki');
});

router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
    });
    await res.redirect('/');
  } catch (error) { next(error) }
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

module.exports = router;
