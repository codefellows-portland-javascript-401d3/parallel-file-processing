const fs = require('fs');

module.exports = function getAllObjects(directory, callback){

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
            }
          }
        });
      });
    }

  });
};
