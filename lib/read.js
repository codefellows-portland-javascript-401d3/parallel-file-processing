const fs = require('fs');

exports = module.exports = (type, callback) => {
  fs.readFile(type, callback);
}