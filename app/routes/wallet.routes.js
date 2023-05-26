module.exports = app => {
    const wallet = require("../controllers/wallet.controller.js");
    const middleware = require('../middleware/auth.middleware.js');
    const bodyParser = require("body-parser");
  
    var router = require("express").Router();

    router.post("/", [bodyParser.json(), middleware] ,wallet.create);
    router.get("/:walletId", [bodyParser.json(), middleware] ,wallet.findOne);
    router.get("/:walletId/transactions", [bodyParser.json(), middleware] ,wallet.getTransaction);
    router.post("/:walletId/transactions", [bodyParser.json(), middleware] ,wallet.createTransaction);


    app.use('/api/wallet', router);
  };