const express = require("express");
const { AirplaneController } = require("../../controllers");

const router = express.Router();

/**
 * /api/v1/airplanes POST
 */
router.post("/", AirplaneController.createAirplane);

/**
 * /api/v1/airplanes GET
 */
router.get("/", AirplaneController.findAllAirplanes);

/**
 * /api/v1/airplanes/:id GET
 */
router.get("/:id", AirplaneController.findbyIdAirplane);

module.exports = router;
