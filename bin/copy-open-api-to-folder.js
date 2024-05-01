const fs = require('fs-extra'); // fs-extra is used for the copy function
const path = require('path');

const copyOpenApiJsonToFolder = function () {
  // Copy the openApi folder in build/smithy/openapi-conversion folder to the root directory.
  const sourceDir = path.join(__dirname, '..', 'smithy', 'openapi-conversion', 'openapi');
  const targetDir = path.join(__dirname, '..', 'openapi');

  try {
    fs.copySync(sourceDir, targetDir);
    console.log('openApi folder copied to root directory successfully.');
  } catch (err) {
    console.error('Error while copying openApi folder:', err);
    return;
  }

  // Remove the smithy folder under build directory
  const smithyDir = 'smithy';
  try {
    fs.removeSync(smithyDir);
    console.log('smithy folder removed successfully.');
  } catch (err) {
    console.error('Error while removing smithy folder:', err);
    return;
  }
}

module.exports = copyOpenApiJsonToFolder;
