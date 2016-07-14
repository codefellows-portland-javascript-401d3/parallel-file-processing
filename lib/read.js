const fs = require('fs');
const Store = require('../lib/create');

exports = module.exports = (path, callback) => {
  fs.readFile(Store.path + path, function(err,data) {
    callback(err,JSON.parse(data));
  });
};