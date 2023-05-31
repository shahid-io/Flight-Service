const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
 * POST : /airplanes
 * req-body {modelNumber, airbus320, capacity: 200}
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
    /*
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created an airplane",
      data: airplane,
      error: {},
    });*/
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
    /**
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating airplane.",
      data: {},
      error: error,
    });
     */
  }
}

async function findAllAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all airplanes.",
      data: airplanes,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching airplanes.",
      data: {},
      error: error,
    });
  }
}

async function findbyIdAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplaneById(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully fetched airplanes by Id : ${req.params.id}`,
      data: airplane,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while fetching airplane by Id.",
      data: {},
      error: error,
    });
  }
}

async function destroyAirplane(req, res) {
  try {
    const airplane = await AirplaneService.destroyAirplaneById(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully DELETED airplane by Id : ${req.params.id}`,
      data: airplane,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while deleting airplane by Id.",
      data: {},
      error: error,
    });
  }
}

async function updateAirplane(req, res) {
  try {
    const airplane = await AirplaneService.updateAirplane(req.body, {
      where: { id: id },
    });

    if (airplane[0] === 0) {
      throw new Error("Not found");
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully UPDATED airplane by Id : ${req.params.id}`,
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Failed to update airplane by Id: ${req.params.id}`,
      data: {},
      error: error.message || "An error occurred during the update operation.",
    });
  }
}
module.exports = {
  createAirplane,
  findAllAirplanes,
  findbyIdAirplane,
  destroyAirplane,
  updateAirplane,
};
