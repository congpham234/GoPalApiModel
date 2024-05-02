#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function createSmithyConfig() {
  // Get the absolute path of the models directory
  const modelsPath = path.resolve(__dirname, '..', 'models');
  const configFilePath = path.resolve(modelsPath, '../smithy-build.json');  // Path to create smithy-build.json

  // Define the Smithy configuration object
  const smithyConfig = {
    version: "1.0",
    sources: [modelsPath],
    outputDirectory: "./smithy",
    maven: {
      dependencies: [
        "software.amazon.smithy:smithy-openapi:1.48.0",
        "software.amazon.smithy:smithy-openapi-traits:1.48.0",
        "software.amazon.smithy:smithy-aws-traits:1.48.0",
        "software.amazon.smithy:smithy-aws-apigateway-openapi:1.48.0"
      ]
    },
    plugins: {
      openapi: {
        version: "3.1.0",
        service: "gopal#GoPal",
        protocol: "aws.protocols#restJson1"
      }
    }
  };

  // Write the configuration to a JSON file at the computed path
  fs.writeFileSync(configFilePath, JSON.stringify(smithyConfig, null, 2));
  console.log(`Smithy configuration has been written to ${configFilePath}`);
}

module.exports = createSmithyConfig;
