const db = require("../models");
const users = db.users;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!(email && password && name)) {
      res.status(400).send("All inputs Required");
    }

    const oldUser = await users.findOne({
      where: {
        email: email,
      },
    });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await users.create({
      name: name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    user.token = jwt.sign({ id: user.id, email: email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    user.update({
      token: user.token,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).send({
      message: "unable to create new user",
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await users.findOne({
      where: {
        email: email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      user.token = jwt.sign(
        { id: user.id, email: email},
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.update({
        token: user.token,
      });

      res.status(200).json(user);
    }
    res.status(400).send({message:"Invalid Credentials"});
  } catch (err) {
    console.log(err);
  }
};
