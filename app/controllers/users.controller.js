const db = require("../models");
const users = db.users;
const jwt = require("jsonwebtoken");

// All Users
exports.getAll = (req, res) => {
  users
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving users",
      });
    });
};

// Find User by ID
exports.findOne = (req, res) => {
  users
    .findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + req.params.id,
      });
    });
};

// Update User with ID
exports.update = async (req, res) => {
  try {
    decoded = jwt.verify(req.headers["x-access-token"], process.env.TOKEN_KEY);
  } catch (e) {
    return res.status(401).send({message: "unauthorized"});
  }
  var userId = decoded.id;
  const user = await users.findByPk(userId);
  if (user) {
    user.update(req.body);
    const uUser = await users.findByPk(userId);
    res.status(200).send(uUser);
  } else {
    res.status(500).send({
      message: "User not found",
    });
  }
};

exports.updateUser = async (req, res) => {
  var userId = req.params.id;
  const user = await users.findByPk(userId);
  if (user) {
    user.update(req.body);
    const uUser = await users.findByPk(userId);
    res.status(200).send(uUser);
  } else {
    res.status(500).send({
      message: "User not found",
    });
  }
};
