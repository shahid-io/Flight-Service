// class AirplaneService {
//   constructor() {}
// }

const { AirplaneRepository } = require("../repositories");

//we can keep this local as well as global
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
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

module.exports = {
  createAirplane,
  getAirplanes,
};
