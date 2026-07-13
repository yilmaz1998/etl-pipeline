# ETL Pipeline with TypeScript, Knex, and PostgreSQL

A modular ETL (Extract, Transform, Load) pipeline built with **TypeScript**, **Node.js**, **Knex.js**, and **PostgreSQL**. The project ingests multiple CSV datasets, validates and transforms the data, and loads it into a relational database.

## Features

- Extract data from CSV files
- Validate required fields and data quality
- Transform raw CSV data into normalized database records
- Load data into PostgreSQL using Knex
- Generic extract and load layers using TypeScript generics
- Database schema managed with Knex migrations
- Modular pipeline architecture
- Error handling for each ETL pipeline

## Tech Stack

- TypeScript
- Node.js
- PostgreSQL
- Knex.js
- csv-parser
- dotenv

## Project Structure

```text
src/
├── db/
│   ├── knex.ts
│   └── migrations/
│
├── etl/
│   ├── extract.ts
│   ├── load.ts
│   ├── transform/
│   └── validation/
│
├── pipelines/
│   ├── salesPipeline.ts
│   ├── customerFeedbackPipeline.ts
│   └── inventoryPipeline.ts
│
├── types/
│
└── index.ts
```

## ETL Workflow

```
CSV Files
     │
     ▼
 Extract
     │
     ▼
 Validation
     │
     ▼
 Transform
     │
     ▼
 Load
     │
     ▼
 PostgreSQL
```

## Datasets

The project currently processes three datasets:

- Sales
- Customer Feedback
- Inventory

Each dataset has its own:

- Validation layer
- Transformation logic
- Pipeline

while sharing the same generic Extract and Load implementations.

## Running the Project

Install dependencies:

```bash
npm install
```

Run database migrations:

```bash
npm run knex -- migrate:latest
```

Run the ETL pipelines:

```bash
npm run etl
```

## Example Transformations

- Convert numeric strings to numbers
- Convert `Yes/No` values to booleans
- Rename CSV fields to match the database schema
- Filter out invalid records before loading

