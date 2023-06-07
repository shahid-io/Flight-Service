const express = require("express");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");

const router = express.Router();

//  /airplanes
router.use("/airplanes", airplaneRoutes);

//  /cities
router.use("/cities", cityRoutes);

module.exports = router;
