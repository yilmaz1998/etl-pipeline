import { extract } from "./etl/extract.js";

const data = await extract("sales.csv");

console.log(data.slice(0, 2));