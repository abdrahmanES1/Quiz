const HttpError = require("./HttpError");
const { StatusCodes } = require('http-status-codes')
class BadRequestError extends HttpError {
    constructor(message = " Bad Request Error ") {
        super(message, StatusCodes.BAD_REQUEST)
    }
}
module.exports = BadRequestError;