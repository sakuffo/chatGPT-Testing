resource "aws_s3_bucket" "saku-example" {
  bucket = var.bucket_name
}

variable "bucket_name" {
  type    = string
  default = "saku-example"
}
