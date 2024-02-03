const logger = require('../utils/logger')
function errorMiddleware(error, request, response, next) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Something went wrong';
    logger.error({
        method: request.method,
        url: request.url,
        statusCode: error.statusCode,
        ip :request.ip,
        user : request.user
    });
    response
        .status(statusCode)
        .send({
            success: false,
            message,
            status: statusCode,
        });
}

module.exports = errorMiddleware;  