const { db } =  require('./db');

module.exports.getProductById = async (event) => {
    const { productId } = event.pathParameters;

    const product = await Promise.resolve(db.find(product => product.id === productId))

    return product
        ? {
            statusCode: 200,
            body: JSON.stringify(product)
        }
        : {
            statusCode: 404,
            error: 'Product not found'
        };
};

module.exports.getProducts = async () => {
    const products = await Promise.resolve(db);

    return {
        statusCode: 200,
        body: JSON.stringify(products)
    };
};
