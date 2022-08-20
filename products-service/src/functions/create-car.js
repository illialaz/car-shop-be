import { badRequestError } from '../response/bad-request.js';
import { internalServerError, successResponse } from '../response/index.js';
import { connect } from '../utils/connect.js';

const isValidCarData = (data) => {
    const {
        brand,
        model,
        engine,
        description,
        price,
        qty
    } = data;

    return brand.length
    && model.length
    && engine.length
    && description.length
    && price === Number(price)
    && qty === Number(qty);
};

const lambdaCreateOne = async ({ event, dbClient }) => {
    const car = JSON.parse(event.body);

    if (!isValidCarData(car)) {
        return badRequestError('Invalid car data');
    }

    const {
        brand,
        model,
        engine,
        description,
        price,
        qty
    } = car;

    await dbClient.query('BEGIN');

    try {
        const { rows: carsRows } = dbClient.query(`insert into cars (brand, model, engine, description, price) values ('${brand}', '${model}', '${engine}', '${description}', ${price}) returning id;`);
        const { id: carId } = carsRows[0];

        dbClient.query(`insert into stock (car_id, qty) values ('${carId}', ${qty});`);

        const { rows: carsInfo } = await dbClient.query(`select * from cars inner join stock on cars.id = stock.car_id where id = '${carId}';`)
        const newCarInfo = carsInfo[0];

        await dbClient.query('COMMIT');

        return successResponse(JSON.stringify(newCarInfo));
    } catch (e) {
        await dbClient.query('ROLLBACK');

        return internalServerError('Can\'t create a new car object');
    }
}

export const createOne = connect(lambdaCreateOne);
