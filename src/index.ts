import { extract } from "./etl/extract.js";
import { transform } from "./etl/transform.js";

const data = await extract("sales.csv");

const transformed = transform(data);

console.log(transformed[0]);