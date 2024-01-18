module.exports = app => {
    const auth = require("../controllers/auth.controller.js");
    const responseMiddleware = require("../middleware/response.middleware.js");

    const bodyParser = require("body-parser");
  
    var router = require("express").Router();

    router.post("/register", [bodyParser.json(), responseMiddleware], auth.register);
    router.post("/login", [bodyParser.json(), responseMiddleware], auth.login);

    app.use('/api/auth', router);
  };