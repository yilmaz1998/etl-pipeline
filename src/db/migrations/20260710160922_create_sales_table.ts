import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("sales", (table) => {
        table.increments("id").primary();
        table.string("sale_date").notNullable();
        table.string("region", 50).notNullable();
        table.string("category", 50).notNullable();
        table.string("customer_type", 50).notNullable();
        table.integer("sessions").notNullable();
        table.integer("order_count").notNullable();
        table.decimal("total_revenue", 12, 2).notNullable();
        table.decimal("average_order_value", 12, 2).notNullable();
        table.integer("ad_spend").notNullable();
        table.decimal("mobile_conversion", 5, 2).notNullable();
        table.decimal("desktop_conversion", 5, 2).notNullable();
        table.decimal("refund_rate", 5, 2).notNullable();
        table.integer("support_tickets").notNullable();
        table.integer("inventory_score").notNullable();
        table.integer("shipping_delay").notNullable();
        table.string("campaign", 100).notNullable();
},
    );
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("sales");
}
