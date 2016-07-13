const fs = require('fs');

module.exports = function getFiles(directory, callback){

  fs.readdir(directory, (error, files)=>{
    if(error){
      return callback(error);
    } else {

      var contents = [];

      files.forEach(file=>{
        fs.readFile(`${directory}/${file}`, { encoding: 'utf-8' }, (error, content) => {
          if(error){
            return callback(error);
          } else {
            var length = contents.push(JSON.parse(content));
            if (length === files.length){
              callback(null, contents);
              //console.log(contents);
            }
          }
        });
        //console.log(file);
      });
    }

  });
};

//create array to store returned dogs
//look in dog folder
//grab each json file
//read the file
//push each dog into the array
//return the list of dogs
//error handling if no dogs returned
