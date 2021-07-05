const router = require("express").Router();
const User = require("../models/user");
const Team = require("../models/team");
const Player = require("../models/player");

router.get("/", async (req, res) => {
  const players = await Player.findAll({ include: [User, Team] });
  res.json(players);
});

router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findOne({
      where: { id: req.params.id },
      include: [User, Team],
    });
    res.json(player);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

router.post("/", async (req, res) => {
  const { userId, teamId } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) return res.status(400).send(`userId ${userId} not found!`);

    if (teamId) {
      const team = await Team.findOne({ where: { id: teamId } });
      if (!team) return res.status(400).send(`teamId ${teamId} not found!`);
    }
    const player = await Player.create(req.body);
    res.json(player);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

module.exports = router;
