const express = require("express");
const app = express();
const morgan = require("morgan");
const staticMiddleware = express.static(__dirname + "/public");
const layout = require("./views/layout.js");
const { db } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);
app.use("/user", userRouter);

app.get("/", (req, res, next) => {
  res.redirect('/wiki');
});

const init = async () => {
  await db.sync({ force: true });
  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
