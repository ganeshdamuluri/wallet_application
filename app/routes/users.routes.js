module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const authMiddleware = require("../middleware/auth.middleware.js");
    const responseMiddleware = require("../middleware/response.middleware.js");
    const bodyParser = require("body-parser");
  
    var router = require("express").Router();

    router.get("/", responseMiddleware, users.getAll);
    router.get("/:id", responseMiddleware, users.findOne);
    router.patch("/", [bodyParser.json(), authMiddleware, responseMiddleware], users.update);
    router.patch("/:id", [bodyParser.json(), responseMiddleware], users.updateUser);

    app.use('/api/users', router);
  };