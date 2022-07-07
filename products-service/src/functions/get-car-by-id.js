import { successResponse, notFoundError } from '../response/index.js';
import { connect } from '../utils/connect.js';

const lambdaGetByID = async ({ event, dbClient }) => {
    const { carId } = event.pathParameters;

    const car = await dbClient.query(
        `select * from cars inner join stock on cars.id = stock.car_id where id = '${carId}';`,
    );

    if (car) {
        return successResponse(JSON.stringify(car.rows[0]));
    }

    return notFoundError('Car not found!');
};

export const getById = connect(lambdaGetByID);
