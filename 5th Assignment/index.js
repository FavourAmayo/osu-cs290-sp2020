let express = require("express");
let app = express();
let handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", 6432);

app.get("/", function (req, res) {
  let reqParams = [];
  for (let i in req.query) {
    reqParams.push({ name: i, value: req.query[i] });
  }

  let context = {};
  context.dataList = reqParams;
  res.render("getting", context);
});

app.post("/", function (req, res) {
  let reqParams = [];
  for (let j in req.query) {
    reqParams.push({ name: j, value: req.query[j] });
  }

  let bodyParams = [];
  for (let x in req.body) {
    bodyParams.push({ name: x, value: req.body[x] });
  }

  let context = {};
  context.queryList = reqParams;
  context.bodyList = bodyParams;
  res.render("posting", context);
});

app.use(function (req, res) {
  res.type("text/plain");
  res.status(404);
  res.render("404 - Not Found");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type("plain/text");
  res.status(500);
  res.render("500 - Server Error");
});

app.listen(app.get("port"), function () {
  console.log(
    `Express started on http://${process.env.HOSTNAME}:app.get("port"); press Ctrl-C to terminate.`
  );
});
