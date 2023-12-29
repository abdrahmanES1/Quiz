
function errorMiddleware(error, request, response, next) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Something went wrong';
    response
        .status(statusCode)
        .send({
            success: false,
            message,
            status: statusCode,
        });
}

module.exports = errorMiddleware;  