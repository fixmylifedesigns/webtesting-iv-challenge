require("dotenv").config();
const express = require("express");
const server = express();
const hobbits = require("./hobbits/hobbitsModel");

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("blahh"));
