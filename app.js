const express = require("express");
const env = require("./env");
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

const accessTokenSecret = env.accessTokenSecret;
const thePassword = env.thePassword;
const authCookie = "wedding-auth-token";

app.use("/", router);

router.get("/", (req, res) => {
  const token = req.cookies[authCookie];
  try {
    const authorised = token && jwt.verify(token, accessTokenSecret);
    res.render("content", { authorised });
  } catch (err) {
    res.render("content", { authorised: false });
  }
});

router.post("/login", (req, res) => {
  const password = req.body.password;
  if (password === thePassword) {
    const hasCheckedRemember = req.body.remember;
    const expiresIn = hasCheckedRemember ? "30d" : "1h";
    const token = jwt.sign({}, accessTokenSecret, { expiresIn });
    const options = hasCheckedRemember
      ? { maxAge: 30 * 24 * 60 * 60 * 1000 }
      : {};
    res.cookie(authCookie, token, options);
  }
  res.redirect("/");
});

router.post("/logout", (req, res) => {
  res.clearCookie(authCookie);
  res.redirect("/");
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  console.log(err);
  res.render("error");
});

module.exports = app;
