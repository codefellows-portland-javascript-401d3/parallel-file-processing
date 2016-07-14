const fs = require('fs');

module.exports =function getItem(input, callback){
  var inputArray = JSON.parse('[' + input + ']');
  var outputArray = [];
  inputArray.forEach(function(item, index){
    //TODO: find a way get the directory dynamically

    //go to the directory
    fs.readdir('./dog', (error, files)=>{
      if(error){
        return callback(error);
      } else {
        //find the file
        files.forEach(file=>{
          if(item === file.replace(/.json/i,'')){
            //console.log(item);
            fs.readFile(`./dog/${file}`, { encoding: 'utf-8' }, (error, content) =>{
              if(error){
                return callback(error);
              } else {
                outputArray.splice(index, 0, JSON.parse(content));
              }
              //when the #of calls = #of replies > return the final array
              if(outputArray.length === inputArray.length){
                callback(null, outputArray);
              }
            });
          }
        });
      }
    });
  });
};
