resource "kubernetes_service" "etl_service" {
  metadata {
    name      = "etl-pipeline-service"
    namespace = "etl"
  }

  spec {
    selector = {
      app = "etl"
    }

    port {
      port        = 3000
      target_port = 3000
    }

    type = "ClusterIP"
  }
}