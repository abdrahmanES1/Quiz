const HttpError = require("./HttpError");
const { StatusCodes } = require('http-status-codes')
class NotFoundError extends HttpError {
    constructor(message = " Not Found Error ") {
        super(message, StatusCodes.NOT_FOUND)
    }
}
module.exports = NotFoundError;