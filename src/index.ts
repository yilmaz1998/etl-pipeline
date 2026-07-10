import { extract } from "./etl/extract.js";
import { transform } from "./etl/transform/customerFeedbackTransform.js";
import { load } from "./etl/load.js";
import type { DataRow } from "./types/types.js";


const data = await extract<DataRow>(
    "customer_feedback.csv"
);

const transformedData = transform(data);

await load(
    "customer_feedback",
    transformedData
);

console.log("Customer feedback ETL completed successfully");