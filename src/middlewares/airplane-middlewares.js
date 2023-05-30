const { StatusCodes } = require("http-status-codes");
function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message:
        "Something went wrong while creating airplane: validateCreateRequest()",
      data: {},
      error: {
        explanation:
          "Model Number not found in the incoming request in the correct form",
      },
    });
  }
  /**
   * if above if condition didn't get executed we can call next middleware.
   */
  next();
}

module.exports = { validateCreateRequest };
