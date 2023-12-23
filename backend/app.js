const express = require("express");
const itemController = require("./controllers/items");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.get("/", (req, res) => {
  res.status(200).json({ data: "ghuh" });
});
app.post("/add", itemController.additems);
app.get("/get", itemController.getitems);
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
};
app.use(errorHandler);
console.log("started");
console.log(process.env.PORT);
if (process.env.DB_URL && process.env.PORT) {
  console.log(process.env);
  const portal = process.env.PORT;
  const db_url = process.env.DB_URL;
  mongoose
    .connect(db_url)
    .then((result) => {
      console.log("Database connection established");
      app.listen({ port: portal });
    })
    .catch((err) => {
      console.log("Error connecting to the database:", err);
    });
}
