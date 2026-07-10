import { runSalesPipeline } from "./pipelines/salesPipeline.js";
import { runCustomerFeedbackPipeline } from "./pipelines/customerFeedbackPipeline.js";
import { runInventoryPipeline } from "./pipelines/inventoryPipeline.js";


async function runETL() {
    try {
        await runSalesPipeline()

        await runCustomerFeedbackPipeline()

        await runInventoryPipeline()

        console.log("All ETL pipelines completed successfully")

    } catch (error) {
        console.error("ETL failed:", error)
    }
}

runETL()