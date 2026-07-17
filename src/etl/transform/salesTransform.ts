import type { DataRow, SalesRecord } from "../../types/types.js";
import { validateRow } from "../validation/salesValidation.js";
import { failedRecordsCounter } from "../../metrics.js";

export function transform(data: DataRow[]): SalesRecord[] {
    const validData = data.filter(validateRow);
    
    const failedRecordsCount = data.length - validData.length;

    failedRecordsCounter.inc({ pipeline: "sales" }, failedRecordsCount);
    
        return validData.map((row) => {
            return {
            sale_date: row.date!,
            region: row.region!,
            category: row.category!,
            customer_type: row.customer_segment!,
            sessions: Number(row.sessions!),
            order_count: Number(row.orders!),
            total_revenue: Number(row.revenue!),
            average_order_value: Number(row.average_order_value!),
            ad_spend: Number(row.ad_spend!),
            mobile_conversion: Number(row.mobile_conversion!),
            desktop_conversion: Number(row.desktop_conversion!),
            refund_rate: Number(row.refund_rate!),
            support_tickets: Number(row.support_tickets!),
            inventory_score: Number(row.inventory_score!),
            shipping_delay: Number(row.shipping_delay_days!),
            campaign: row.campaign && row.campaign !== "None"
                ? row.campaign
                : null
        };
    });
}