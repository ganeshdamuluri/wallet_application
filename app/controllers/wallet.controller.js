const db = require("../models");
const jwt = require("jsonwebtoken");
const wallet = db.wallet;
const transaction = db.transactions;

// Save Wallet
exports.create = async (req, res) => {
  const { name, balance } = req.body;
  if(!balance || balance === '' || balance < 0){
    return res.status(400).send({ message: "Invalid Balance" });
  }
  try {
    decoded = jwt.verify(req.headers["x-access-token"], process.env.TOKEN_KEY);
  } catch (e) {
    return res.status(401).send({ message: "unauthorized" });
  }
  var userid = decoded.id;
  const userWallet = await wallet.findAll({
    where: {
      userId: userid,
    },
  });

  if (userWallet.length > 0) {
    return res.status(409).send({ message: "wallet already created" });
  } else {
    const nWallet = await wallet.create({
      userId: userid,
      name: name,
      balance: balance,
      createdAt: Date(),
    });
    res.send(nWallet);
  }
};

// get Wallet by ID
exports.findOne = (req, res) => {
  try {
    decoded = jwt.verify(req.headers["x-access-token"], process.env.TOKEN_KEY);
  } catch (e) {
    return res.status(401).send({ message: "unauthorized" });
  }
  wallet
    .findByPk(req.params.walletId)
    .then((data) => {
      if(data){
        res.send(data);
      }else{
        res.status(400).send({
          message: "Invalid Wallet Id",
        });
      }      
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Data",
      });
    });
};

//get Trasaction
exports.getTransaction = (req, res) => {
  try {
    decoded = jwt.verify(req.headers["x-access-token"], process.env.TOKEN_KEY);
  } catch (e) {
    return res.status(401).send({ message: "unauthorized" });
  }
  transaction
    .findAll({
      where: {
        walletId: req.params.walletId,
      },
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Data",
      });
    });
};

//create transaction
exports.createTransaction = async (req, res) => {
  const { amount, description } = req.body;
  try {
    decoded = jwt.verify(req.headers["x-access-token"], process.env.TOKEN_KEY);
  } catch (e) {
    return res.status(401).send({ message: "unauthorized" });
  }
  const walletData = await wallet.findByPk(req.params.walletId);
  if (!walletData) {
    return res.status(404).send({ message: "wallet not found" });
  }
  const newBalance = parseFloat(walletData.balance) + parseFloat(amount);
  walletData.update({ balance: newBalance });
  const transation = transaction.create({
    walletId: req.params.walletId,
    amount: amount,
    description: description,
    balance: newBalance,
    createdAt: Date(),
  });
  res.send(transation);
};
