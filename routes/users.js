const router = require("express").Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.json(user);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    user.age = req.body.age;
    await user.save();
    res.json(user);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    res.send(`${user} row(s) affected`);
  } catch (error) {
    console.log("ERR: " + error);
  }
});

module.exports = router;
