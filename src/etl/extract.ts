import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import type { DataRow } from "../types/sales.ts";


export function extract(fileName: string): Promise<DataRow[]> {
    const filePath = path.join(
        process.cwd(),
        "data",
        "incoming",
        fileName
    )

    const results: DataRow[] = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data: DataRow) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    })
}