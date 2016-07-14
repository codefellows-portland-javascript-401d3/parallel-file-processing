const fs = require('fs');

function getItem(input){
  var inputArray = JSON.parse('[' + input + ']');
  var outputArray = [];
  inputArray.forEach(function(item, index){
    //TODO: find a way get the directory dynamically

    //go to the directory
    fs.readdir('./dog', (error, files)=>{
      if(error){
        console.log(error.message);
      } else {
        //find the file
        files.forEach(file=>{
          if(item === file.replace(/.json/i,'')){
            //console.log(item);
            fs.readFile(`./dog/${file}`, { encoding: 'utf-8' }, (error, content) =>{
              if(error){
                console.log(error.message);
              } else {
                outputArray.splice(index, 0, JSON.parse(content));
              }
              //when the #of calls = #of replies > return the final array
              if(outputArray.length === inputArray.length){
                callback(outputArray);
              }
            });
          }
        });
      }
    });
  });
}

function callback(response){
  console.log(response);
}

getItem('"dog2", "dog1", "dog3"');

//Functionality and plan
//i want dog 2, 3, 1
//returns array of dog objects 2, 3, 1 in order

//function [which dogs i want ]
//convert the request to an array
//for each item in the request
  //go to the directory
  //find the file that matches the request
  //read the file
  //get the file contents
  //put file contents into the final array to return
//return the results
