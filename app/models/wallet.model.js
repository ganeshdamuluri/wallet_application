module.exports = (sequelize, Sequelize) => {
  const wallets = sequelize.define(
    "wallet",
    {
      userId: {
        type: Sequelize.NUMBER
      },
      name: {
        type: Sequelize.STRING,
      },
      balance: {
        type: Sequelize.FLOAT
      }
    },
    {
      sequelize,
      tableName: "wallet",
      timestamps: true,
      updatedAt: false,
    }
  );

  return wallets;
};
