'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: {
        brand: 'Porsche',
        model: '944s2',
        engineCapacity: 3.0
      }
  };
};
