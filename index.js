const fs = require('fs');

const fileNames = [];
const names = [];
const texts = [];
const sets = [];

const getFileNames = function (folder, callback, fnToCall) {
  fs.readdir(`./test/test-dir/${folder}`, (err,files) => {
    if (err) return console.error(err);
    else {
      files.forEach ((file, index) => {
        const nameSet = [index, file];
        names.push(nameSet);
        fileNames[nameSet[0]] = nameSet[1];
      });
      callback(folder, files, fnToCall);
    }
  });
};

const getFileContents = function (folder, files, callback) {
  fileNames.forEach ((name, index) => {
    fs.readFile(`./test/test-dir/${folder}/${name}`, {encoding:'utf-8'}, (err,contents) => {
      if (err) return console.error(err);
      else {
        const parsedContents = JSON.parse(contents).description;
        const shortParsedContents = parsedContents.slice(0,20);
        const contSet = [shortParsedContents + '...', index];
        texts.push(contSet);
        for ( var i = 0; i < names.length; i++ ) {
          if (contSet[1] === names[i][0]) {
            sets[i] = [];
            sets[i][0] = names[i][0]; // set index
            sets[i][1] = names[i][1]; // set name
            sets[i][2] = contSet[0];  // set content
          }
        }
        if (sets.length === files.length) callback();
      }
    });
  });
};

const printArrays = () => {
  console.log( 'RESULTS\n', sets);
};

const allOfType = (whichFolder) => {
  getFileNames(whichFolder, getFileContents, printArrays);
};
