const express = require ("express");
const app = express();
const db = require("./models");
const PORT = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

db.sequelize.sync().then(() =>{
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});