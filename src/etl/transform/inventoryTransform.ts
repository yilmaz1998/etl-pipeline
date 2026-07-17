import type { DataRow, InventoryRecord } from "../../types/types.js";
import { validateInventoryRow } from "../validation/inventoryValidation.js";
import { failedRecordsCounter } from "../../metrics.js";


export function transform(data: DataRow[]): InventoryRecord[] {
    const validData = data.filter(validateInventoryRow);

    const failedRecordsCount = data.length - validData.length;

    failedRecordsCounter.inc({ pipeline: "inventory" }, failedRecordsCount);

    return validData.map((row) => {
        return {
            inventory_date: row.date!,
            warehouse_location: row.warehouse!,
            product_category: row.category!,
            stock_quantity: Number(row.inventory_level!),
            is_out_of_stock: row.out_of_stock === "Yes",
            restock_days: Number(row.restock_days!),
            supplier_delay_days: Number(row.supplier_delay!),
            damaged_item_count: Number(row.damaged_items!)
        };
    });
}