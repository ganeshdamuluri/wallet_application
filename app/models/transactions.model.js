module.exports = (sequelize, Sequelize) => {
  const transaction = sequelize.define(
    "transactions",
    {
      walletId:{
        type: Sequelize.NUMBER
      },
      amount: {
        type: Sequelize.FLOAT,
      },
      balance: {
        type: Sequelize.FLOAT,
      },
      description: {
        type: Sequelize.STRING,
      }
    },
    {
      sequelize,
      tableName: "transactions",
      timestamps: true,
      updatedAt: false,
    }
  );

  return transaction;
};
