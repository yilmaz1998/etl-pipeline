import { extract } from "./etl/extract.js";
import { transformInventory } from "./etl/transform/inventoryTransform.js";
import { load } from "./etl/load.js";
import type { DataRow } from "./types/types.js";


const data = await extract<DataRow>(
    "inventory.csv"
);

const transformedData = transformInventory(data);

await load(
    "inventory",
    transformedData
);

console.log("Customer feedback ETL completed successfully");