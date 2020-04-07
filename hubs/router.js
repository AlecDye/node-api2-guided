const express = require("express");

const Hubs = require("./hubs-model.js"); // update the path now that this file is in the hubs folder

const router = express.router();

// handles every request that begins with /api/hubs (we removed all appearances of that)
// replace server with router
router.get("/", (req, res) => {
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

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

router.put("/:id", (req, res) => {
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

// Remember the "S" in exportS
module.exports = router; // make it available for require()
