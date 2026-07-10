import type { DataRow } from "../../types/types.js";


export function validateRow(row: DataRow): boolean {
    const requiredFields = [
        "date",
        "region",
        "category",
        "customer_segment",
        "sessions",
        "orders",
        "revenue",
        "average_order_value",
        "ad_spend",
        "mobile_conversion",
        "desktop_conversion",
        "refund_rate",
        "support_tickets",
        "inventory_score",
        "shipping_delay_days"
    ];

    return requiredFields.every(
        (field) => row[field] !== undefined && row[field] !== ""
    );
}