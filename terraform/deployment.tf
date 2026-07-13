resource "kubernetes_deployment" "etl" {
  metadata {
    name      = "etl-pipeline"
    namespace = "etl"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "etl"
      }
    }

    template {
      metadata {
        labels = {
          app = "etl"
        }
      }

      spec {
        container {
          name  = "etl"
          image = "etl-pipeline:v1"

          image_pull_policy = "Never"

          env {
            name = "DB_HOST"
            value = "postgres-service"
          }
          env {
            name = "DB_PORT"
            value = 5432
          }
          env {
            name = "DB_NAME"
            value = "etl_db"
          }
          env {
            name = "DB_USER"
            value = "postgres"
          }
          env {
            name = "DB_PASSWORD"
            value = "postgres"
          }
        }
      }
    }
  }
}