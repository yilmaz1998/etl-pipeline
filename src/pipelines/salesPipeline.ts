import { extract } from "../etl/extract.js";
import { transform } from "../etl/transform/salesTransform.js";
import { load } from "../etl/load.js";
import type { DataRow } from "../types/types.js";

export async function runSalesPipeline() {
    try {
        const data = await extract<DataRow>(
            "sales.csv"
        );

        console.log(`Extracted ${data.length} sales rows`)

        const transformedData = transform(data);
        console.log(`Transformed ${transformedData.length} sales rows`)

        await load(
            "sales",
            transformedData
        );

        console.log("Sales ETL completed successfully")

    } catch (error) {
        console.error(
            "Sales ETL failed:",
            error
        );

        throw error
    }
}