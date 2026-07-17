# ETL Pipeline with TypeScript, Docker, Kubernetes, Terraform, and PostgreSQL

A modular and production-oriented ETL (Extract, Transform, Load) pipeline built with **TypeScript**, **Node.js**, **Knex.js**, and **PostgreSQL**.

The pipeline ingests multiple CSV datasets, validates and transforms the data, and loads processed records into a PostgreSQL database. The application is containerized with Docker and deployed to Kubernetes using Terraform for infrastructure provisioning.

## Features

- Extract data from CSV files
- Validate required fields and data quality
- Transform raw CSV data into normalized database records
- Load processed data into PostgreSQL using Knex.js
- Generic Extract and Load layers using TypeScript generics
- Database schema management with Knex migrations
- Modular pipeline architecture
- Dataset-specific validation and transformation logic
- Error handling for ETL execution
- Dockerized application runtime
- Kubernetes deployment using Terraform
- PostgreSQL provisioning inside Kubernetes
- Automated database migration workflow

## Tech Stack

### Application

- TypeScript
- Node.js
- PostgreSQL
- Knex.js
- csv-parser
- dotenv

### Infrastructure

- Docker
- Kubernetes
- Terraform
- Minikube

## Architecture

```
CSV Files
    |
    ▼
Extract Layer
    |
    ▼
Validation
    |
    ▼
Transform Layer
    |
    ▼
Load Layer
    |
    ▼
PostgreSQL Database
```

Infrastructure:

```
Terraform
    |
    ▼
Kubernetes Cluster
    |
    ├── ETL Pipeline Pod
    |
    ├── PostgreSQL Pod
    |
    └── Migration Job
```

## Project Structure

```
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

terraform/
├── main.tf
├── providers.tf
├── postgres.tf
└── deployment.tf
```

## ETL Pipelines

The project currently processes three datasets:

- Sales
- Customer Feedback
- Inventory

Each dataset has:

- Custom validation rules
- Dataset-specific transformation logic
- Independent pipeline execution

The Extract and Load layers are shared and implemented using reusable TypeScript abstractions.

## Database Migrations

Database schemas are managed using Knex migrations.

Run migrations:

```bash
npm run knex -- migrate:latest
```

Created database tables:

- sales
- customer_feedback
- inventory

## Running Locally

Install dependencies:

```bash
npm install
```

Start PostgreSQL:

```bash
docker compose up
```

Run migrations:

```bash
npm run knex -- migrate:latest
```

Run ETL pipeline:

```bash
npm run etl
```

## Running with Kubernetes

Build Docker image:

```bash
docker build -t etl-pipeline .
```

Load image into Minikube:

```bash
minikube image load etl-pipeline
```

Initialize Terraform:

```bash
cd terraform

terraform init
```

Deploy infrastructure:

```bash
terraform apply
```

Check Kubernetes resources:

```bash
kubectl get pods -n etl
```

## ETL Execution Result

Example successful pipeline execution:

```
Extracted 500 sales rows
Transformed 500 sales rows
Sales ETL completed successfully

Extracted 500 customer_feedback rows
Transformed 500 customer_feedback rows
Customer Feedback ETL completed successfully

Extracted 500 inventory rows
Transformed 500 inventory rows
Inventory ETL completed successfully

All ETL pipelines completed successfully
```

## Example Transformations

- Convert numeric strings into numbers
- Convert `Yes/No` values into booleans
- Rename CSV fields to match database schema
- Normalize raw CSV structures
- Filter invalid records before loading

## Future Improvements

- Add GitHub Actions CI/CD pipeline
- Deploy to managed Kubernetes services (AWS EKS / GKE)
- Add Kubernetes Secrets for sensitive configuration
- Schedule ETL execution using Kubernetes CronJobs
- Add monitoring and observability with OpenTelemetry
