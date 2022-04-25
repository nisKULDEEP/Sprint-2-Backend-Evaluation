const express = require("express");
const dbconnect = require("./DBconnect/server");
const app = express();
const userRoutes = require("./Routes/userRoutes");
const masterAccountRoutes = require("./Routes/masterAccount");

app.use(express.json());

app.use("/createmasteraccount", masterAccountRoutes);
app.use("/user", userRoutes);

const PORT = 3030;

app.listen(PORT, () => {
  dbconnect();
  console.log(`App running on port ${PORT}`);
});

module.exports = app;
