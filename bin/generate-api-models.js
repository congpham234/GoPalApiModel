#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("generate-open-api-doc");
shell.exec("openapi --input ./openapi/GoPal.openapi.json --output ./generated --client xhr");
