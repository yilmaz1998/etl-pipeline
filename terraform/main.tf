resource "kubernetes_namespace" "etl" {
  metadata {
    name = "etl"
  }
}