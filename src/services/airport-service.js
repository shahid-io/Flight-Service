const { AirportRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

//we can keep this local as well as global
const airportRepository = new AirportRepository();

async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    if (error.name === "TypeError") {
      throw new AppError(
        "Cannot create a new Airport object",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
    throw error;
  }
}

async function getAirport() {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested Airport are not present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirportById(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The Airport you requested with Id : ${id}  isn't present`,
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirportById(id) {
  try {
    const airport = await airportRepository.destroy(id);
    return airport;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airport you requested to delete isn't present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirport(id, data) {
  try {
    const airport = await airportRepository.update(id, data);
    return airport;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airport you requested to update isn't present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirport,
  getAirport,
  getAirportById,
  destroyAirportById,
  updateAirport,
};
