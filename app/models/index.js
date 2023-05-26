const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize('walletdb', 'root', '', {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: dbConfig.operatorsAliases,
  storage:dbConfig.storage
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.wallet = require("./wallet.model.js")(sequelize, Sequelize);
db.transactions = require("./transactions.model.js")(sequelize, Sequelize);

module.exports = db;