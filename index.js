const express = require("express");

// Database import

const hubsRouter = require("./hubs/router"); // endpoints moved to router.js

const server = express();

server.use(express.json());

server.use("/api/hubs", hubsRouter); // server will use the imported router.js file

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
