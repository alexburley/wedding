const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const logger = require("morgan");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const router = express.Router();

const accessTokenSecret = "therootsecret";
const thePassword = "foo";
const authCookie = "wedding-auth-token";

app.use("/", router);

router.get("/", (req, res) => {
  const token = req.cookies[authCookie];
  const authorised = token && jwt.verify(token, accessTokenSecret);
  console.log(authorised, accessTokenSecret);
  res.render("index", { authorised: token });
});

router.post("/login", (req, res) => {
  const password = req.body.password;
  if (password === thePassword) {
    //TODO: If remember me then set expiry to 30 days
    const token = jwt.sign({}, accessTokenSecret, { expiresIn: "1h" });
    res.cookie(authCookie, token);
  }
  res.redirect("/");
});

router.post("/logout", (req, res) => {
  res.clearCookie(authCookie);
  res.redirect("/");
});

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  console.log(err);
  res.render("error");
});

module.exports = app;
