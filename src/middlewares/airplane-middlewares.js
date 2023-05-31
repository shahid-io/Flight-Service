const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message =
      "Something went wrong while creating airplane : validateCreateRequest()";
    ErrorResponse.error = {
      explanation:
        "Model Number not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  /**
   * if above if condition didn't get executed we can call next middleware.
   */
  next();
}

module.exports = { validateCreateRequest };
