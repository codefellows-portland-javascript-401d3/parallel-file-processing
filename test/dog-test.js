const assert = require('assert');
const getAllObjects = require('../lib/getAllObjects');
const getItem = require('../lib/getItem');

describe('get dogs', ()=>{

  var allDogs = [ { name: 'dog 1', id: '1', type: 'dog' },
  { name: 'dog2', id: '2', type: 'dog' },
  { name: 'dog3', id: '3', type: 'dog' },
  {name : 'dog 4', id : '4', type : 'dog'}];

  var someDogs = [ { name: 'dog2', id: '2', type: 'dog' },
  { name: 'dog 1', id: '1', type: 'dog' },
  { name: 'dog3', id: '3', type: 'dog' } ];

  it('gets all dogs', done=>{
    getAllObjects( __dirname + '/../dog', (error, fileContents)=>{
      if(error) return done(error);
      assert.deepEqual(fileContents, allDogs);
      done();
    });
  });

  it('retrieves select dogs in the same order', done=>{
    getItem('"dog2", "dog1", "dog3"', (error, fileContents)=>{
      if(error) return done(error);
      assert.deepEqual(fileContents, someDogs);
      done();
    });
  });

});
