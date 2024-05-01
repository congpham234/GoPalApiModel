const fs = require('fs-extra'); // fs-extra is used for the copy function

const copyOpenApiJsonToFolder = function () {
  // Copy the openApi folder in build/smithy/openapi-conversion folder to the root directory.
  const sourceDir = './smithy/openapi-conversion/openApi';
  const targetDir = './openapi';

  fs.copy(sourceDir, targetDir, function (err) {
    if (err) {
      console.error('Error while copying openApi folder:', err);
      return;
    }
    console.log('openApi folder copied to root directory successfully.');
  });

  // Remove the smithy folder under build directory
  const smithyDir = 'smithy';
  fs.remove(smithyDir, function (err) {
    if (err) {
      console.error('Error while removing smithy folder:', err);
      return;
    }
    console.log('smithy folder removed successfully.');
  });
}

module.exports = copyOpenApiJsonToFolder;