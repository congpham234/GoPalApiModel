#! /usr/bin/env node
var shell = require("shelljs");

const installSmithyOnMac = function () {
  // Install smithy-cli using Homebrew
  shell.echo('Installing smithy-cli...');
  if (shell.exec('brew install smithy-cli').code !== 0) {
    shell.echo('Error: smithy-cli installation failed');
    shell.exit(1);
  }
};

module.exports = installSmithyOnMac;
