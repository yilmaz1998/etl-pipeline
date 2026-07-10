import db from '../db/knex.js';
import type { SalesRecord } from '../types/types.js';


export async function load(data: SalesRecord[]) {
    await db("sales").insert(data); 
}