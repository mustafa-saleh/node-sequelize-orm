const express = require("express");
const users = require("./routes/users");
const teams = require("./routes/teams");
const players = require("./routes/players");
const sequelize = require("./models/database");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", users);
app.use("/teams", teams);
app.use("/players", players);

(async function start() {
  try {
    // force: recreate the database
    await sequelize.sync(/*{ force: true }*/);
    console.log("DB CONNECTED !");
    app.listen(port, () =>
      console.log(`SERVER STARTED ON http://localhost:${port}`)
    );
  } catch (error) {
    console.log("SERVER FAILED TO START: " + error);
  }
})();
