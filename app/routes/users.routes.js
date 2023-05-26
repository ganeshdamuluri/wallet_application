module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const middleware = require("../middleware/auth.middleware.js");
    const bodyParser = require("body-parser");
  
    var router = require("express").Router();

    router.get("/", users.getAll);
    router.get("/:id", users.findOne);
    router.put("/update", [bodyParser.json(), middleware], users.update);

    app.use('/api/users', router);
  };