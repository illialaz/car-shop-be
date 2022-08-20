import { successResponse, notFoundError } from '../response/index.js';
import { connect } from '../utils/connect.js';

const lambdaGetByID = async ({ event, dbClient }) => {
    const { carId } = event.pathParameters;

    const { rows } = await dbClient.query(
        `select * from cars inner join stock on cars.id = stock.car_id where id = '${carId}';`,
    );
    const car = rows.length ? rows[0] : undefined;

    if (car) {
        return successResponse(JSON.stringify(car));
    }

    return notFoundError('Car not found!');
};

export const getById = connect(lambdaGetByID);
