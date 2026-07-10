import type { DataRow, CustomerFeedbackRecord } from "../../types/types.js";
import { validateCustomerFeedbackRow } from "../validation/customerFeedbackValidation.js";

export function transform(data: DataRow[]): CustomerFeedbackRecord[] {
    return data.filter(validateCustomerFeedbackRow).map((row) => {
        return {
            feedback_date: row.date!,
            customer_segment: row.customer_segment!,
            rating: Number(row.rating!),
            nps_score: Number(row.nps_score!),
            customer_sentiment: row.customer_sentiment!,
            delivery_experience: row.delivery_experience!,
            product_quality: row.product_quality!,
            returned: row.returned === "Yes" ? true : false
        };
    });
}