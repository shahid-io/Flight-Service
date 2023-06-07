const express = require("express");

const airplaneRoutes = require("./airplane-routes");

const router = express.Router();

//  /airplanes
router.use("/airplanes", airplaneRoutes);

module.exports = router;
