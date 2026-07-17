import client from 'prom-client';

client.collectDefaultMetrics();


export const recordsCounter = new client.Counter({
    name: 'records_processed_total',
    help: 'Total number of records processed',
    labelNames: ['pipeline']
    });

export const failedRecordsCounter = new client.Counter({
        name: 'failed_records_total',
        help: 'Total number of failed records',
        labelNames: ['pipeline']
    });

export const recordsProcessingTimeHistogram = new client.Histogram({
        name: 'records_processing_time_seconds',
        help: 'Histogram of records processing time in seconds',
        labelNames: ['pipeline'],
        buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5],
    });

export const register = client.register;