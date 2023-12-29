const HttpError = require("./HttpError");
const { StatusCodes } = require('http-status-codes')
class UnauthorizedError extends HttpError {
    constructor(message = " Bad Request Error ") {
        super(message, StatusCodes.UNAUTHORIZED)
    }
}
module.exports = UnauthorizedError;