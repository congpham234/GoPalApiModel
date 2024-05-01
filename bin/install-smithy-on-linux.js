#! /usr/bin/env node
var shell = require("shelljs");

const installSmithyOnLinux = function () {
  // Creating directory for Smithy installation
  shell.echo('Creating installation directory...');
  shell.mkdir('-p', 'smithy-install/smithy');

  // Downloading Smithy CLI zip from GitHub releases
  shell.echo('Downloading Smithy CLI...');
  if (shell.exec('curl -L https://github.com/smithy-lang/smithy/releases/download/1.48.0/smithy-cli-linux-x86_64.zip -o smithy-install/smithy-cli-linux-x86_64.zip').code !== 0) {
    shell.echo('Error: Failed to download Smithy CLI zip file');
    shell.exit(1);
  }

  // Unzipping downloaded file
  shell.echo('Unzipping Smithy CLI...');
  if (shell.exec('unzip -qo smithy-install/smithy-cli-linux-x86_64.zip -d smithy-install').code !== 0) {
    shell.echo('Error: Failed to unzip Smithy CLI');
    shell.exit(1);
  }

  // Moving unzipped files to a specific directory
  shell.echo('Moving Smithy CLI files...');
  shell.mv('smithy-install/smithy-cli-linux-x86_64/*', 'smithy-install/smithy');

  // Running the installer
  shell.echo('Installing Smithy CLI...');
  if (shell.exec('sudo smithy-install/smithy/install').code !== 0) {
    shell.echo('Error: Smithy CLI installation failed');
    shell.exit(1);
  }

  // Optionally deleting the installation files
  shell.echo('Cleaning up installation files...');
  shell.rm('-rf', 'smithy-install');

  shell.echo('Smithy CLI installation complete.');
}

module.exports = installSmithyOnLinux;
