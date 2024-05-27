const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.get("/popular_repos/google", controllers.getPopularReposOfGoogleUser);

module.exports = router;
