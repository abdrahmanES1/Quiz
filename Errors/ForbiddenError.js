const HttpError = require("./HttpError");
const { StatusCodes } = require('http-status-codes');

class ForbiddenError extends HttpError {
    constructor(message = "Forbidden Error") {
        super(message, StatusCodes.FORBIDDEN);
    }
}

module.exports = ForbiddenError;
