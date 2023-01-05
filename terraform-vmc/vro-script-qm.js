// Set the input variables for the script
var vraHost = "https://vra.example.com";
var vraToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
var nsxSegmentId = "segment-1234";

// Set the input variables for the virtual machines
var vmName1 = "vm1";
var vmNumCpus1 = 2;
var vmMemory1 = 4;
var vmName2 = "vm2";
var vmNumCpus2 = 2;
var vmMemory2 = 4;

// Authenticate to vRA
var vraAuth = vCACCAFEAuth.createBasicAuthentication(vraHost, "vsphere.local", "username", "password");
var vraClient = vCACCAFEEntitiesClient.createClient(vraAuth);

// Get the blueprint for deploying a virtual machine
var blueprintId = "b737aadc-9d12-47e5-a0d1-a01a2a87aad5";
var blueprint = vraClient.blueprintClient.getBlueprint(blueprintId);

// Set the input properties for the first virtual machine
var inputProperties1 = {};
inputProperties1["Name"] = vmName1;
inputProperties1["Number of CPUs"] = vmNumCpus1;
inputProperties1["Memory"] = vmMemory1;
inputProperties1["NSX Segment"] = nsxSegmentId;

// Set the input properties for the second virtual machine
var inputProperties2 = {};
inputProperties2["Name"] = vmName2;
inputProperties2["Number of CPUs"] = vmNumCpus2;
inputProperties2["Memory"] = vmMemory2;
inputProperties2["NSX Segment"] = nsxSegmentId;

// Deploy the first virtual machine
var request1 = vraClient.requestClient.createRequest(blueprint, "Deploy Virtual Machine", inputProperties1);
var request1Id = request1.id;
System.log("Submitting request to deploy virtual machine: " + request1Id);
vraClient.requestClient.submitRequest(request1Id, true);

// Deploy the second virtual machine
var request2 = vraClient.requestClient.createRequest(blueprint, "Deploy Virtual Machine", inputProperties2);
var request2Id = request2.id;
System.log("Submitting request to deploy virtual machine: " + request2Id);
vraClient.requestClient.submitRequest(request2Id, true);
