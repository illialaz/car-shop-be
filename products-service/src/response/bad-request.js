export const badRequestError = (message) => {
    return {
        statusCode: 400,
        error: message
    };
}
