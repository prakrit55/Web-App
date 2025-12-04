resource "aws_iam_role" "demo" {
  name = var.iam_demo_role

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "eks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}




resource "aws_iam_role_policy_attachment" "demo-AmazonEKSClusterPolicy" {
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
    role       = aws_iam_role.demo.name
}

resource "aws_eks_cluster" "demo" {
    name     = var.cluster_name
    version = "1.29"
    role_arn = aws_iam_role.demo.arn

    vpc_config {
        subnet_ids = [
        aws_subnet.private-us-east-1a.id,
        aws_subnet.private-us-east-1b.id,
        aws_subnet.public-us-east-1a.id,
        aws_subnet.public-us-east-1b.id
    ]
    }

    depends_on = [aws_iam_role_policy_attachment.demo-AmazonEKSClusterPolicy]
}

output "cluster_name" {
  value = aws_eks_cluster.demo.name
}

output "cluster_endpoint" {
  value = aws_eks_cluster.demo.endpoint
}

output "cluster_certificate_authority_data" {
  value = aws_eks_cluster.demo.certificate_authority[0].data
}
