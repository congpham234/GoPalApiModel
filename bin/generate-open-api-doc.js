#! /usr/bin/env node
var shell = require("shelljs");
const installSmithyOnLinux = require("./install-smithy-on-linux");
const installSmithyOnMac = require("./install-smithy-on-mac");

function installAndBuild() {
  if (process.platform === 'linux') {
    installSmithyOnLinux();
  } else if (process.platform === 'darwin') {
    installSmithyOnMac();
  } else {
    shell.echo('Unsupported platform. This script runs on Linux and macOS only.');
    shell.exit(1);
  }

  // Run smithy build
  shell.echo('Running smithy build...');
  if (shell.exec('smithy build').code !== 0) {
    shell.echo('Error: smithy build failed');
    shell.exit(1);
  }

  // Copy OpenAPI JSON to the desired folder
  const copyOpenApiJsonToFolder = require('./copy-open-api-to-folder');
  copyOpenApiJsonToFolder(function (err) {
    if (err) {
      shell.echo('Error: Failed to copy OpenAPI JSON');
      shell.exit(1);
    }
    shell.echo('Successfully copied OpenAPI JSON.');
  });
}

installAndBuild();
