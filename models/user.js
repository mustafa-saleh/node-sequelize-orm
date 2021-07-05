const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");
const Player = require("./player");

class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "user", timestamps: false }
);

User.hasOne(Player, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
Player.belongsTo(User);

module.exports = User;
