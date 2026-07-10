import type { DataRow } from "../../types/types.js";

export function validateInventoryRow(row: DataRow): boolean {
    const requiredFields = [
        "date",
        "warehouse",
        "category",
        "inventory_level",
        "out_of_stock",
        "restock_days",
        "supplier_delay",
        "damaged_items"
    ];

    const hasRequiredFields = requiredFields.every(
        (field) => row[field] !== undefined && row[field] !== ""
    );

    if (!hasRequiredFields) {
        return false;
    }

    const inventoryLevel = Number(row.inventory_level);
    const restockDays = Number(row.restock_days);
    const supplierDelay = Number(row.supplier_delay);
    const damagedItems = Number(row.damaged_items);

    return (
        !isNaN(inventoryLevel) &&
        inventoryLevel >= 0 &&
        !isNaN(restockDays) &&
        restockDays >= 0 &&
        !isNaN(supplierDelay) &&
        supplierDelay >= 0 &&
        !isNaN(damagedItems) &&
        damagedItems >= 0 &&
        ["Yes", "No"].includes(row.out_of_stock!)
    );
}