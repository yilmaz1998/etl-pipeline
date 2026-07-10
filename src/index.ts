import { extract } from "./etl/extract.js";
import { transform } from "./etl/transform.js";
import { load } from "./etl/load.js";

const data = await extract("sales.csv");

const transformedData = transform(data);

await load(transformedData);

console.log("ETL pipeline completed successfully");