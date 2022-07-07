'use strict';
import pg from 'pg';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const dbOptions = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USERNAME,
    password: PG_PASSWORD,
    ssl: {
        rejectAnauthorized: false
    },
    connectionTimeoutMillis: 5000
};

export const connect = func => async (event, context, callback) => {
    let client;
    let result;

    try {
        client = new pg.Client(dbOptions);
        await client.connect();

        result = await func({ event, context, callback, dbClient: client });
    } catch (e) {
        result = {
            status: 500,
            message: 'Something went wrong.'
        };
    } finally {
        client.end();

        return result;
    }
};
