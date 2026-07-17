resource "kubernetes_job" "migration" {
  metadata {
    name      = "knex-migration"
    namespace = "etl"
  }

  spec {
    template {
      metadata {}

      spec {
        restart_policy = "Never"

        container {
          name  = "migration"
          image = "etl-pipeline:v2"

          image_pull_policy = "Never"

          command = [
            "npm",
            "run",
            "knex",
            "--",
            "migrate:latest",
            "--knexfile",
            "knexfile.ts"
          ]

          env {
            name  = "DB_HOST"
            value = "postgres-service"
          }

          env {
            name  = "DB_PORT"
            value = "5432"
          }

          env {
            name  = "DB_NAME"
            value = "etl_db"
          }

          env {
            name  = "DB_USER"
            value = "postgres"
          }

          env {
            name  = "DB_PASSWORD"
            value = "postgres"
          }
        }
      }
    }
  }
}