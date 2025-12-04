variable "cluster_name" {
    default = "demo"
    type = string
    description = "AWS EKS CLuster Name"
    nullable = false
}

variable "iam_demo_role" {
    default = "eks-cluster-demo"
    type = string
    description = "iam role for cluster demo"
}