export const notFoundError = (message) => {
    return {
        statusCode: 404,
        error: message
    };
}
