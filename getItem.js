const fs = require('fs');

function getItem(input){
  var inputArray = JSON.parse('[' + input + ']');

  inputArray.forEach(function(item, index){
    //TODO: find a way get the directory dynamically

    //go to the directory
    fs.readdir('./dog', (error, files)=>{
      if(error){
        console.log(error.message);
      } else {
        var response = [];
        //find the file
        files.forEach(file=>{
          if(item === file.replace(/.json/i,'')){
            //console.log(item);
            fs.readFile(`./dog/${file}`, { encoding: 'utf-8' }, (error, content) =>{
              if(error){
                console.log(error.message);
              } else {
                response.push(JSON.parse(content));
                console.log(response);
                //console.log(item + ' '+ index);
                //response.splice(index, 0, JSON.parse(content));
                //response.push(JSON.parse(content));
                //console.log(typeof response);
              }
            });
          }
        });
      }
    });
    //adds back to response array in order
    // console.log(item + ' '+ index);
    // response.splice(index, 0, item);
    // console.log(response);
  });
}


getItem('"dog2", "dog1", "dog4"');

//Functionality and plan
//i want dog 2, 3, 1
//returns array of dog objects 2, 3, 1 in order

//function [which dogs i want ]
//convert the request to an array
//for each item
  //go to the directory
  //find the file
  //read the file
  //get the file contents
  //put into return array
//return the results
