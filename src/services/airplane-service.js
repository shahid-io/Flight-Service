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
    throw error;
  }
}

async function getAirplaneById(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function destroyAirplaneById(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    throw error;
  }
}

async function updateAirplane(id, data) {
  try {
    const airplane = await airplaneRepository.update(id, data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplaneById,
  destroyAirplaneById,
  updateAirplane,
};
