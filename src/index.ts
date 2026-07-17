import dotenv from "dotenv";
dotenv.config();

import "./server.js";

import { runSalesPipeline } from "./pipelines/salesPipeline.js";
import { runCustomerFeedbackPipeline } from "./pipelines/customerFeedbackPipeline.js";
import { runInventoryPipeline } from "./pipelines/inventoryPipeline.js";
import { recordsProcessingTimeHistogram } from "./metrics.js"
import { recordsCounter } from "./metrics.js"

async function runPipelineWithMetrics(pipelineName: string, pipelineFunction: () => Promise<number>) {
    const end = recordsProcessingTimeHistogram.startTimer({ pipeline: pipelineName })
    try {
        const recordsProcessed = await pipelineFunction();
        recordsCounter.inc({ pipeline: pipelineName }, recordsProcessed);
        } finally {
        end()
    }
}


async function runETL() {
    try {
        await runPipelineWithMetrics("sales", runSalesPipeline)

        await runPipelineWithMetrics("customerFeedback", runCustomerFeedbackPipeline)

        await runPipelineWithMetrics("inventory", runInventoryPipeline)

        console.log("All ETL pipelines completed successfully")

    } catch (error) {
        console.error("ETL failed:", error)
    }
}

runETL()