import { extract } from "../etl/extract.js";
import { transform } from "../etl/transform/customerFeedbackTransform.js";
import { load } from "../etl/load.js";
import type { DataRow } from "../types/types.js";

export async function runCustomerFeedbackPipeline() {
    try {
        const data = await extract<DataRow>(
            "customer_feedback.csv"
        );

        console.log(`Extracted ${data.length} customer_feedback rows`)

        const transformedData = transform(data);
        console.log(`Transformed ${transformedData.length} customer_feedback rows`)

        await load(
            "customer_feedback",
            transformedData
        );
        
        console.log("Customer Feedback ETL completed successfully")

        return transformedData.length

    } catch (error) {
        console.error(
            "Customer Feedback ETL failed:",
            error
        );

        throw error
    }
}