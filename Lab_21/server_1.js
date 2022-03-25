const express = require("express");
const app = express();
const passport = require("passport");
const { HttpBasicStrategy } = require("./auth/passport-http");

app.use(express.json());
app.use(passport.initialize());
app.use(express.urlencoded());

app.get("/login", (req, res) => {
  //passport.use(HttpBasicStrategy);
  //passport.
  res.sendFile(__dirname + "/logForm.html");
});

app.post("/api/login", (req, res) => {
  passport.use(HttpBasicStrategy);
  passport.authenticate("basic", { session: false }, (req, res) => {
    res.send("AUTHORIZED");
  });
});

app.listen(5000);
