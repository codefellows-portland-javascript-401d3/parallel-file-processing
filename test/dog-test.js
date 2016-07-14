const assert = require('assert');
const getAllObjects = require('../getAllObjects');

describe('get dogs', ()=>{

  var dogContents = [ { name: 'dog 1', id: '1', type: 'dog' },
  { name: 'dog2', id: '2', type: 'dog' },
  { name: 'dog3', id: '3', type: 'dog' },
  {name : 'dog 4', id : '4', type : 'dog'}];

  it('gets all dogs', done=>{
    getAllObjects( __dirname + '/../dog', (error, fileContents)=>{
      if (error) return done(error);
      assert.deepEqual(fileContents, dogContents);
      done();
    });

  });

  // it('retrieves select dogs in the same order', done=>{
  //
  // });
//
//   it('stores a dog'. ()=>{
//
//   });
//
});
