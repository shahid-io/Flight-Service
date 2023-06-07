const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

/**
 * /api/v1/airplanes POST
 */
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

/**
 * /api/v1/airplanes GET
 */
router.get("/", AirplaneController.findAllAirplanes);

/**
 * /api/v1/airplanes/:id GET
 */
router.get("/:id", AirplaneController.findbyIdAirplane);

/**
 *  /api/v1/airplanes/:id DELETE
 */

router.delete("/:id", AirplaneController.destroyAirplane);

/**
 *  /api/v1/airplanes/:id UPDATE
 */
router.patch("/:id", AirplaneController.updateAirplane);

module.exports = router;
