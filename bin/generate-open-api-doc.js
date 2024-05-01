#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("brew install smithy-cli");
shell.exec("smithy build");

const copyOpenApiJsonToFolder = require('../src/copy-open-api-to-folder');
copyOpenApiJsonToFolder();
