const express = require("express");
const env = require("./env");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const logger = require("morgan");
const faqs = require("./faqs");
const accom = require("./accom");
const taxis = require("./taxis");
const itinerary = require("./itinerary");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const router = express.Router();

const accessTokenSecret = env.accessTokenSecret;
const passphrase = env.passphrase;
const authCookie = "wedding-auth-token";

app.use("/", router);

router.get("/", (req, res) => {
  const token = req.cookies[authCookie];
  try {
    const authorised = token && jwt.verify(token, accessTokenSecret);
    res.render("index", { authorised, itinerary });
  } catch (err) {
    res.render("index", { authorised: false });
  }
});

router.get("/rsvp", (req, res) => {
  const token = req.cookies[authCookie];
  try {
    const authorised = token && jwt.verify(token, accessTokenSecret);
    res.render("index", { authorised, rsvp: true });
  } catch (err) {
    res.render("index", { authorised: false });
  }
});

router.get("/travel", (req, res) => {
  const token = req.cookies[authCookie];
  try {
    const authorised = token && jwt.verify(token, accessTokenSecret);
    res.render("index", { authorised, travel: true, accom, taxis });
  } catch (err) {
    res.render("index", { authorised: false });
  }
});

router.get("/registry", (req, res) => {
  const token = req.cookies[authCookie];
  try {
    const authorised = token && jwt.verify(token, accessTokenSecret);
    res.render("index", { authorised, registry: true });
  } catch (err) {
    res.render("index", { authorised: false });
  }
});

router.get("/questions", (req, res) => {
  const token = req.cookies[authCookie];
  try {
    const authorised = token && jwt.verify(token, accessTokenSecret);
    res.render("index", { authorised, questions: true, faqs });
  } catch (err) {
    res.render("index", { authorised: false });
  }
});

router.get("/photos", (req, res) => {
  const token = req.cookies[authCookie];
  try {
    const authorised = token && jwt.verify(token, accessTokenSecret);
    res.render("index", { authorised, photos: true });
  } catch (err) {
    res.render("index", { authorised: false });
  }
});

router.post("/login", (req, res) => {
  const password = req.body.password;
  if (password === passphrase) {
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

app.use("/public", express.static(path.join(__dirname, "../public")));

router.post("/logout", (req, res) => {
  res.clearCookie(authCookie);
  res.redirect("/");
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  console.log(err);
  res.render("components/error");
});

module.exports = app;
