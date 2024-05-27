const express = require("express");
const cors = require("cors");
const middlewares = require("./src/middlewares");
const routes = require("./src/routes");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);

app.use("/github_api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to Github NodeJS API app!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
