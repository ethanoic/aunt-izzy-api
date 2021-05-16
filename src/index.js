const express = require("express");
const app = express();
const port = 3000;

const http = require("https");

app.get("/", (req, res) => {
  res.send("Hello World!");

  // convert currency using Fixr api
  // https://fixer.io/documentation
  // http://data.fixer.io/api/latest?access_key=8c9bac7325c4405828b6b3e41f57d213&base=EUR&symbols=SGD
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
