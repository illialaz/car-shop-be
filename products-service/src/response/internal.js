export const internalServerError = (message) => {
    return {
        statusCode: 500,
        message: message
    };
}
