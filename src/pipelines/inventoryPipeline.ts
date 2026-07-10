import { extract } from "../etl/extract.js";
import { transform } from "../etl/transform/inventoryTransform.js";
import { load } from "../etl/load.js";
import type { DataRow } from "../types/types.js";


export async function runInventoryPipeline() {
    try {
        const data = await extract<DataRow>(
            "inventory.csv"
        );

        console.log(`Extracted ${data.length} inventory rows`)

        const transformedData = transform(data);
        console.log(`Transformed ${transformedData.length} inventory rows`)

        await load(
            "inventory",
            transformedData
        );

        console.log("Inventory ETL completed successfully")

    } catch (error) {
        console.error(
            "Inventory ETL failed:",
            error
        );

        throw error
    }
}