import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("customer_feedback", (table) => {
        table.increments("id").primary();
        table.string("feedback_date").notNullable();
        table.string("customer_type", 50).notNullable();
        table.integer("rating").checkBetween([1, 5]).notNullable();
        table.integer("nps_score").checkBetween([-100, 100]).notNullable();
        table.string("customer_sentiment", 50).notNullable();
        table.string("delivery_experience", 50).notNullable();
        table.string("product_quality", 50).notNullable();
        table.boolean("returned")
     })}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("customer_feedback");
}