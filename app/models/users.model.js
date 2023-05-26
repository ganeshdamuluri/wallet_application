module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "users",
    {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      }
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );

  return Users;
};
