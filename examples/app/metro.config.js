const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

// Get the path to the library root (two levels up from examples/app)
const libraryRoot = path.resolve(__dirname, '../..');

const config = {
  watchFolders: [libraryRoot],
  
  resolver: {
    // Ensure we don't include the library's node_modules or dist
    blockList: [
      new RegExp(`${libraryRoot}/node_modules/react/.*`),
      new RegExp(`${libraryRoot}/node_modules/react-native/.*`),
    ],
    
    // Look for modules in the app's node_modules first, then the library's
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(libraryRoot, 'node_modules'),
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
