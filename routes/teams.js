const router = require("express").Router();
const Team = require("../models/team");

router.get("/", async (req, res) => {
  const teams = await Team.findAll();
  res.json(teams);
});

router.get("/:id", async (req, res) => {
  try {
    const team = await Team.findOne({ where: { id: req.params.id } });
    res.json(team);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

router.post("/", async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.json(team);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

module.exports = router;
