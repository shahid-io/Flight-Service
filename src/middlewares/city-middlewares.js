const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message =
      "Something went wrong while creating City : validateCreateRequest()";
    ErrorResponse.error = new AppError([
      "City name not found in the incoming request",
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  /**
   * if above if condition didn't get executed we can call next middleware.
   */
  next();
}

module.exports = { validateCreateRequest };
