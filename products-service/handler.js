'use strict';

module.exports.getProducts = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: [
      {
        id: '1',
        brand: 'Porsche',
        model: '944s2',
        engineCapacity: 3.0,
        price: 4000
      },
      {
        id: '2',
        brand: 'Porsche',
        model: '911',
        engineCapacity: 3.4,
        price: 20000
      }
    ]
  };
};
