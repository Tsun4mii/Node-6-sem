const passport = require("passport");
const Basic = require("passport-http");

let jsonFile = require("../users.json");

const HttpBasicStrategy = new Basic.BasicStrategy(
  async (username, password, done) => {
    const user = jsonFile.find(
      (u) => u.username.toLowerCase === username.toLowerCase
    );
    if (user) {
      return done(null, user);
    }
    if (err) {
      return done(err);
    }
    return done(null, false);
  }
);

module.exports = { HttpBasicStrategy };
