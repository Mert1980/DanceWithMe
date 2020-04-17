// this file allows you to develop/test your api without the frontend

const express = require("express");
var cors = require("cors");

const devServer = express();
const api = require("./server.js");

devServer.use(cors());
devServer.use((req, res, next) => {
  console.log(req.method + ": " + req.path);
  next();
});

devServer.use("/api", api);

devServer.get("/", (req, res) => {
  res.send("react frontend");
});

// Port number is defined in .env file
const port = process.env.PORT;
devServer.listen(port, () =>
  console.log(`listening at http://localhost:${port}`)
);
