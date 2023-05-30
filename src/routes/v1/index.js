const express = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");

const router = express.Router();

//  /airplanes
router.use("/airplanes", airplaneRoutes);

//  /info
router.get("/info", InfoController.info);

module.exports = router;
