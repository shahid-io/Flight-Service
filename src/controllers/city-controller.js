const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 *
 * POST : /cities
 * req-body : { "name" : "London" }
 */
const createCity = async (req, res) => {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

/**
 * GET : /cities
 * req-body : {}
 */
async function findAllCities(req, res) {
  try {
    const cities = await CityService.getCity();
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 *
 * GET : /cities/:id
 * req-body : { }
 * req-params : { id }
 */
async function findbyIdCity(req, res) {
  try {
    const city = await CityService.getCityById(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /cities/:id
 * req-body : {}
 * req-params : { id }
 */
async function destroyCity(req, res) {
  try {
    const city = await CityService.destroyCityById(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * PATCH : /cities/:id
 * req-body : {}
 * req-params : { id }
 */
async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.params.id, req.body);
    console.log("-------------", city);
    /*
      if (city[0] === 0) {
        throw new Error("Not found");
      }
    */
    return res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully UPDATED City by Id : ${req.params.id}`,
      data: city,
      error: {},
    });
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  findAllCities,
  findbyIdCity,
  updateCity,
  destroyCity,
};
