const express = require('express')
const app = express();
const morgan = require('morgan');
const staticMiddleware = express.static(__dirname + "/public")
const layout = require('./views/layout.js');
const { db } = require('./models');


app.use(express.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.send(layout(''));
})





const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
