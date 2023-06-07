const { CityRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

//we can keep this local as well as global
const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name == "SequelizeUniqueConstraintError" ||
      error.name == "SequelizeValidationError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new City Object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity() {
  try {
    const city = await cityRepository.getAll();
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The requested Cities are not present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCityById(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The City you requested with Id : ${id}  isn't present`,
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCityById(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
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

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The City you requested to update isn't present",
        error.StatusCodes
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
  getCity,
  getCityById,
  destroyCityById,
  updateCity,
};
