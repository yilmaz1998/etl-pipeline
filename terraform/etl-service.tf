resource "kubernetes_service" "etl_service" {
  metadata {
    name      = "etl-pipeline-service"
    namespace = "etl"

    labels = {
        app = "etl"
    }
  }

  spec {
    selector = {
      app = "etl"
    }

port {
  name        = "http"
  port        = 3000
  target_port = 3000
}

    type = "ClusterIP"
  }
}