const { AirplaneRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

//we can keep this local as well as global
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "TypeError") {
      throw new AppError(
        "Cannot create a new Airplane object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw error;
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested airplanes are not present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplaneById(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The airplane you requested with Id : ${id}  isn't present`,
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplaneById(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to delete isn't present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirplane(id, data) {
  try {
    const airplane = await airplaneRepository.update(id, data);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to update isn't present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplaneById,
  destroyAirplaneById,
  updateAirplane,
};
