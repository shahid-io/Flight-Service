const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");
const router = express.Router();

/**
 * /api/v1/airport POST
 */
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

/**
 * /api/v1/airport GET
 */
router.get("/", AirportController.findAllAirport);

/**
 * /api/v1/airport/:id GET
 */
router.get("/:id", AirportController.findbyIdAirport);

/**
 *  /api/v1/airplanes/:id DELETE
 */

router.delete("/:id", AirportController.destroyAirport);

/**
 *  /api/v1/airplanes/:id UPDATE
 */
router.patch("/:id", AirportController.updateAirport);

module.exports = router;
