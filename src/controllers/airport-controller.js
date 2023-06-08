const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
 * POST : /airplanes
 * req-body {name, "airbus320", code: "BLR", address: "Banglore", cityId: "XYX"}
 */
async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * GET : /airports
 * req-body {}
 */
async function findAllAirport(req, res) {
  try {
    const airports = await AirportService.getAirport();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * POST : /airports/:id
 * req-body {}
 */
async function findbyIdAirport(req, res) {
  try {
    const airport = await AirportService.getAirplaneById(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /airports/:id
 * req-body {}
 */
async function destroyAirport(req, res) {
  try {
    const airport = await AirportService.destroyAirportById(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateAirport(req, res) {
  try {
    const airport = await AirportService.updateAirport(req.params.id, req.body);

    if (airplane[0] === 0) {
      throw new Error("Not found");
    }
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createAirport,
  findAllAirport,
  findbyIdAirport,
  destroyAirport,
  updateAirport,
};
