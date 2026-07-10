import db from '../db/knex.js';

export async function load<T>(
    tableName: string,
    data: T[]
) {
    await db(tableName).insert(data);
}