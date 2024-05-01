#! /usr/bin/env node
var shell = require("shelljs");

// Helper function to execute shell commands synchronously and handle errors
function executeCommand(command) {
  var result = shell.exec(command);
  if (result.code !== 0) {
    shell.echo(`Error executing command: ${command}\n${result.stderr}`);
    shell.exit(1);
  }
  return result;
}

function main() {
  // Run the command to generate the Open API documentation
  executeCommand("generate-open-api-doc");

  // Run the OpenAPI command to generate client code
  executeCommand("openapi --name GoPal --input ./openapi/GoPal.openapi.json --output ./generated --client xhr");
}

main();
