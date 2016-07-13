const fs = require('fs');

exports = module.exports = (type, data, callback) => {
  fs.writeFile(type, data, callback);
}