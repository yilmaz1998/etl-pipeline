import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';


export function extract<T>(fileName: string): Promise<T[]> {
    const filePath = path.join(
        process.cwd(),
        "data",
        "incoming",
        fileName
    )

    const results: T[] = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data: T) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (err) => {
                reject(err);
            });
    })
}