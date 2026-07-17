import type { DataRow, CustomerFeedbackRecord } from "../../types/types.js";
import { validateCustomerFeedbackRow } from "../validation/customerFeedbackValidation.js";
import { failedRecordsCounter } from "../../metrics.js";

export function transform(data: DataRow[]): CustomerFeedbackRecord[] {
    const validData = data.filter(validateCustomerFeedbackRow);

    const failedRecordsCount = data.length - validData.length;

    failedRecordsCounter.inc({ pipeline: "customer_feedback" }, failedRecordsCount);

    return validData.filter(validateCustomerFeedbackRow).map((row) => {
        return {
            feedback_date: row.date!,
            customer_type: row.customer_segment!,
            rating: Number(row.rating!),
            nps_score: Number(row.nps_score!),
            customer_sentiment: row.sentiment!,
            delivery_experience: row.delivery_experience!,
            product_quality: row.product_quality!,
            returned: row.returned === "Yes" ? true : false
        };
    });
}