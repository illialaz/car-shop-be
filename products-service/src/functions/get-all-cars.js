import { successResponse } from '../response/index.js';
import { connect } from '../utils/connect.js';

const lambdaGetAll = async ({ dbClient }) => {
    const { rows: cars } = await dbClient.query(
        'select * from cars inner join stock on cars.id = stock.car_id;'
    );

    return successResponse(JSON.stringify(cars));
}

export const getAll = connect(lambdaGetAll);
