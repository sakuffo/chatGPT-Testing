# This TF script came from the ChatGPT prompt 
# Can you write a terraform script to deploy vms on VMware Cloud on AWS


# Configure the VMware Cloud on AWS provider
provider "vmc" {
  refresh_token = var.vmc_refresh_token
  org_id       = var.vmc_org_id
  sddc_id      = var.vmc_sddc_id
}

# Create a resource group
resource "vmc_resource_group" "example" {
  name = "example"
}

# Create a virtual machine
resource "vmc_vm" "vm1" {
  resource_group_id = vmc_resource_group.example.id
  name              = "vm1"
  region            = var.vmc_region
  sddc_id           = var.vmc_sddc_id
  vpc_id            = var.vmc_vpc_id
  subnet_id         = var.vmc_subnet_id
  folder_id         = var.vmc_folder_id
  compute_id        = var.vmc_compute_id
  disk {
    size_gb = 60
    type    = "EBS"
  }
  network_interface {
    network_id = var.vmc_network_id
  }
  guest_os_customization {
    computer_name  = "vm1"
    domain         = "local"
    admin_password = "password"
    time_zone      = "UTC"
  }
  num_cpus = 2
  memory   = 4
}

# Create a second virtual machine
resource "vmc_vm" "vm2" {
  resource_group_id = vmc_resource_group.example.id
  name              = "vm2"
  region            = var.vmc_region
  sddc_id           = var.vmc_sddc_id
  vpc_id            = var.vmc_vpc_id
  subnet_id         = var.vmc_subnet_id
  folder_id         = var.vmc_folder_id
  compute_id        = var.vmc_compute_id
  disk {
    size_gb = 60
    type    = "EBS"
  }
  network_interface {
    network_id = var.vmc_network_id
  }
  guest_os_customization {
    computer_name  = "vm2"
    domain         = "local"
    admin_password = "password"
    time_zone      = "UTC"
  }
  num_cpus = 2
  memory   = 4
}
