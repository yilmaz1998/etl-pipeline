import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("inventory", (table) => {
        table.increments("id").primary();
        table.string("inventory_date").notNullable();
        table.string("warehouse_location", 100).notNullable();
        table.string("product_category", 100).notNullable();
        table.integer("stock_quantity").notNullable();
        table.boolean("is_out_of_stock").notNullable();
        table.integer("restock_days").notNullable();
        table.integer("supplier_delay_days").notNullable();
        table.integer("damaged_item_count").notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("inventory");
}