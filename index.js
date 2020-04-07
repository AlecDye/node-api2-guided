const express = require("express");

// Database import
const Hubs = require("./hubs/hubs-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.get("/api/hubs", (req, res) => {
  Hubs.find(req.query)
    .then((hubs) => {
      res.status(200).json(hubs);
    })
    .catch((error) => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the hubs",
      });
    });
});

server.get("/api/hubs/:id", (req, res) => {
  Hubs.findById(req.params.id)
    .then((hub) => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: "Hub not found" });
      }
    })
    .catch((error) => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the hub",
      });
    });
});

server.post("/api/hubs", (req, res) => {
  Hubs.add(req.body)
    .then((hub) => {
      res.status(201).json(hub);
    })
    .catch((error) => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error adding the hub",
      });
    });
});

server.delete("/api/hubs/:id", (req, res) => {
  const id = req.params.id;
  Hubs.remove(id)
    .then((count) => {
      if (count) {
        res.status(200).json({ message: "Hub removed" });
      } else {
        res.status(404).json({ message: "Hub not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error adding the hub" });
    });
});

server.put("/api/hubs/:id", (req, res) => {
  const changes = req.body;
  console.log("Changes", changes);
  Hubs.update(req.params.id, changes)
    .then((count) => {
      if (count) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: "The hub could not be found" });
      }
    })
    .catch((error) => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error updating the hub",
      });
    });
});

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
