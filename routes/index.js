var express = require("express");
const bcrypt = require("bcryptjs");
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Expssdfs" });
});

/*POST home page. */
router.post("/", function (req, res, next) {
  res.send("This is a POST request");
});
/*PUT home page. */
router.put("/", function (req, res, next) {
  res.send("This is a PUT request");
});
/*DELETE home page. */
router.delete("/", function (req, res, next) {
  res.send("This is a DELETE request");
});

/*ALL */
router.all("/all", function (req, res, next) {
  res.send("I can do this all day");
});

/*REGEX. */
router.get("/ab*d", function (req, res, next) {
  res.send("Regex TEST");
});

/*article id*/
router.get("/article/:id", function (req, res, next) {
  res.send(`You get article ${req.params.id}`);
});

router.get("/ip", function (req, res, next) {
  console.log(req.ip);
  res.send(`Your IP ${req.ip}`);
});

/*POST data */
router.post("/postdata", function (req, res, next) {
  console.log(req.body);
  res.send("This is a POST request");
});

/*cookies*/
router.get("/cookies", function (req, res, next) {
  console.log(req.cookies);
  res.send("This is a cookies test");
});

/*POST home page. */
router.post("/add", function (req, res, next) {
  // let a = req.body["a"]
  // let b = req.body["b"]
  // let c = a+b

  number = 0;
  for (var key in req.body) {
    number += req.body[key];
  }
  res.send(`number: ${number}`);
});

router.get("/ejs_example", function (req, res, next) {
  res.render("ejs_example", { user: "xiaoswaii", show: true });
});

router.get("/ejs_example1", function (req, res, next) {
  res.render("ejs_example1", {
    user: "xiaoswaii",
    show: false,
    title: "<h3>Welcome</h3>",
    animal: ["dog", "cat", "tiger"],
  });
});

router.get("/registera", function (req, res, next) {
  res.render("register", { user: "xiaoswaii", show: true });
});

router.get("/stock", function (req, res, next) {
  res.render("stock", { user: "xiaoswaii", show: true });
});

router.get("/stock", function (req, res, next) {
  res.render("stock", { user: "xiaoswaii", show: true });
});




module.exports = router;
