const express = require("express");

const hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", async (req, res) => {
  const rows = await hobbits.getAll();

  res.status(200).json(rows);
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;
  hobbits
    .remove(id)
    .then(del => {
      res.status(204).end(del);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;
