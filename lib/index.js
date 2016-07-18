const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const parallel = {};

const directories = ['cat', 'dog', 'snake'];
const animals = [{type: 'cat',name: 'Mitch', age: 5}, {type: 'cat', name: 'Chaplin', age: 9}, {type:'cat', name: 'Betsy', age: 3}, {type: 'dog', name: 'Max', age: 4}, {type: 'dog', name: 'Bill', age: 5}, {type: 'dog', name: 'Lucky', age: 8}, {type: 'snake', name: 'Venom', age: 2}, {type: 'snake', name: 'Fang', age: 12}];

//make our paths based on directories array
parallel.makePaths = function(callback) {
  let counter = 0;
  directories.forEach(function(directory) {
    fs.mkdir(path.join(__dirname, '/animals', directory), (err) => {
      if (err) return callback(err);
      counter++;
      if (counter === directories.length) {
        callback();
      }
    });
  });
};

//function to handle creation of resources, run when paths have been made
//file names and contents will be based on values in animals array
parallel.createResource = function() {
  animals.forEach(function(animal, index) {
    fs.writeFile(path.join(__dirname, '/animals', animal.type, animal.type + index.toString() + '.json'),
    JSON.stringify(animal), (err) => {
      if (err) console.log(err); return;
    });
  });
};

//used as check for getting directory contents
parallel.getDirectoryContent = function(directory, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);
    callback(null, files);
  });
};

//function to handle async getting of resources in a directory
parallel.getResource = function(directory, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);
    const filesArray = [];
    files.forEach(file => {
      fs.readFile(`${directory}/${file}`, {encoding: 'utf-8'}, (err, content) => {
        if (err) return callback(err);
        filesArray.push(content);
        if (filesArray.length === files.length) callback(null, filesArray);
      });
    });
  });
};


//function for returning resources in certain order
parallel.getResourceInOrder = function(directory, array, callback) {
  let orderArray = array;
  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);
    const filesArray = [];
    files.forEach(file => {
      fs.readFile(`${directory}/${file}`, {encoding: 'utf-8'}, (err, content) => {
        if (err) return callback(err);
        filesArray.push(content);
        if (filesArray.length === files.length) callback(null, filesArray);
      });
    });
  });
};

// parallel.makePaths(parallel.createResource);
// parallel.removeDirectories();

module.exports = parallel;
