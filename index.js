const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const app = express();
// middle were
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json([
    {
      name: "naim rahman",
    },
    {
      name: "islam",
    },
    {
      name: "Emon",
    },
    {
      name: "niko",
    },
    {
      name: "shawon",
    },
  ]);
});

app.listen(8000, () => {
  console.log(chalk.bgCyan("this server is running on port 8000"));
});
