const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Player extends Model {}
Player.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { sequelize, modelName: "player", timestamps: false }
);

module.exports = Player;
