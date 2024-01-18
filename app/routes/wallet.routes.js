module.exports = app => {
    const wallet = require("../controllers/wallet.controller.js");
    const authMiddleware = require('../middleware/auth.middleware.js');
    const responseMiddleware = require("../middleware/response.middleware.js");

    const bodyParser = require("body-parser");
  
    var router = require("express").Router();

    router.post("/", [bodyParser.json(), authMiddleware, responseMiddleware] ,wallet.create);
    router.get("/:walletId", [bodyParser.json(), authMiddleware, responseMiddleware] ,wallet.findOne);
    router.get("/:walletId/transactions", [bodyParser.json(), authMiddleware, responseMiddleware] ,wallet.getTransaction);
    router.post("/:walletId/transactions", [bodyParser.json(), authMiddleware, responseMiddleware] ,wallet.createTransaction);


    app.use('/api/wallet', router);
  };