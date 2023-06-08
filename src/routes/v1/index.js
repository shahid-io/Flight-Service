const express = require("express");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");
const router = express.Router();

//  /airplanes
router.use("/airplanes", airplaneRoutes);

//  /cities
router.use("/cities", cityRoutes);

// /airports
router.use("/airports", airportRoutes);

module.exports = router;
