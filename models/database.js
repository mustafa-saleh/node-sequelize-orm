const { Sequelize } = require("sequelize");

const { POSTGRES_DB, POSTGRES_USR, POSTGRES_PD } = process.env;
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USR, POSTGRES_PD, {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
