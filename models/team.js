const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");
const Player = require("./player");

class Team extends Model {}
Team.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nop: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, modelName: "team", timestamps: false }
);

Team.hasMany(Player, {
  foreignKey: {
    name: "teamId",
    allowNull: true,
  },
});
Player.belongsTo(Team);
module.exports = Team;
