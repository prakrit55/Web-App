terraform {
  required_version = "~> 1.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}


variable "cluster_name" {}


module "eks" {
  source        = "./module/eks"
  cluster_name  = local.cluster
  iam_demo_role = local.iam_demo_role
}
