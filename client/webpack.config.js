const path = require('path');

module.exports = {
  // ...other configuration options
  resolve: {
    alias: {
      utils: path.resolve(__dirname, '../utils/utils.js'),
    },
  },

};
