module.exports = app => {
    const auth = require("../controllers/auth.controller.js");
    const bodyParser = require("body-parser");
  
    var router = require("express").Router();

    router.post("/register", bodyParser.json(), auth.register);
    router.post("/login", bodyParser.json(), auth.login);

    app.use('/api/auth', router);
  };