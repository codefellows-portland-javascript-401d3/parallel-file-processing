const fs = require('fs');

exports = module.exports = (type, callback) => {
  fs.writeFile(type, '12345', callback);
}