const fs = require('fs');

exports = module.exports = (type, data, callback) => {
  checkExists('storage', function() {
    checkExists('storage/' + type, function() {
      nextAvailable('storage/' + type + '/' + type, 0, function(name) {
        fs.writeFile(name, data, callback);
      });
    });
  });
} //

function checkExists(path,callback) {
  fs.exists(path, function(exists) {
    if (exists) {
      callback();
    } else {
      fs.mkdir(path, callback);
    }
  });
}

function nextAvailable(stub, counter, callback) {
  fs.exists(stub + counter, function(exists) {
    if(!exists) {
      callback(stub + counter);
    } else {
      nextAvailable(stub, ++counter, callback);
    }
  });
}