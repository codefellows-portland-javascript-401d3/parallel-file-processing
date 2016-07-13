const fs = require('fs');
//const path = require('path');
const assert = require('assert');
const getAllObjects = require('../getAllObjects');

describe('get dogs', ()=>{

  var dogContents = [ { name: 'dog 1', id: '1', type: 'dog' },
  { name: 'dog2', id: '2', type: 'dog' },
  { name: 'dog3', id: '3', type: 'dog' } ];

  it('gets all dogs', done=>{
    getAllObjects( __dirname + '/../dogs', (error, fileContents)=>{
      if (error) return done(error);
      assert.deepEqual(fileContents, dogContents);
      done();
    });

  });
//
//   it('retrieves dogs in the same order'. ()=>{
//
//   });
//
//   it('stores a dog'. ()=>{
//
//   });
//
});

//getAllObjects('../dogs');
