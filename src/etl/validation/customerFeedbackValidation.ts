import type { DataRow } from "../../types/types.js";


export function validateCustomerFeedbackRow(row: DataRow): boolean {
    const requiredFields = [
        "date",
        "customer_segment",
        "rating",
        "nps_score",
        "sentiment",
        "delivery_experience",
        "product_quality",
        "returned"
    ];

    const hasRquiredFields = requiredFields.every(
        (field) => row[field] !== undefined && row[field] !== ""
    );

    if (!hasRquiredFields) {
        return false;
    }

    const rating = Number(row.rating)
    const npsScore = Number(row.nps_score)

    return (
        !isNaN(rating) &&
        rating >= 1 &&
        rating <= 5 &&
        !isNaN(npsScore) &&
        npsScore >= -100 &&
        npsScore <= 100 &&
        ["Yes", "No"].includes(row.returned!)
    )
}