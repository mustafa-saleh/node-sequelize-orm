const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "main.sqlite",
});

module.exports = sequelize;
