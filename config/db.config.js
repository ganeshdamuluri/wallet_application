const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST, DB_DIALECT, DB_ALIAS, DB_FILE } = process.env;

module.exports = {
  HOST: DB_HOST,
  dialect: DB_DIALECT,
  operatorsAliases: DB_ALIAS,
  storage: DB_FILE,
};
