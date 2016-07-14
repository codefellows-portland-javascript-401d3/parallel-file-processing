const assert = require('chai').assert;
const fs = require('fs');
const path = require('path');
const parallel = require('../lib/index.js');
const chokidar = require('chokidar');

var watcher = chokidar.watch(path.join(__dirname, '../lib/animals'), {
  ignored: /[\/\\]\./,
  persistent: true
});


//retrieves resources errors but I can't figure out why
//stores resources with a unique id needs to loop through file names to check for uniqueness

describe('parallel-file-processing', () =>{

  it('creates directory structure and seeds files', (done) => {
    parallel.makePaths(parallel.createResource);
    watcher.on('addDir', (pathChange) => {
      assert.equal(pathChange, path.join(__dirname, '../lib/animals/cat'));
      done();
    });
  });

  it('stores resources by type', (done) => {
    parallel.getDirectoryContent(path.join(__dirname, '../lib/animals/'), (err, directoryContents) => {
      if (err) return done(err);
      assert.deepEqual(directoryContents, ['cat', 'dog', 'snake']);
      done();
    });
  });

  it('stores resources with a unique id', (done) => {
    parallel.getDirectoryContent(path.join(__dirname, '../lib/animals/cat'), (err, directoryContents) => {
      if (err) return done(err);
      assert.deepEqual(directoryContents, ['cat0.json', 'cat1.json', 'cat2.json']);
      done();
    });
  });

  it('retrieves resources, and does so by type', (done) => {
    parallel.getResource(path.join(__dirname, '../lib/animals/snake'), (err, fileContents) => {
      assert.ok(!err);
      assert.ok(fileContents);
      assert.deepEqual(JSON.parse(fileContents[1]), { type: 'snake', name: 'Fang', age: 12 });
      done();
    });
  });

  it('errs on bad directory', (done) => {
    parallel.getResource(path.join(__dirname, '../lib/animals/cattens'), (err, fileContents) => {
      assert.ok(err);
      assert.ok(!fileContents);
      done();
    });
  });

  it('retrieves resources in particular order based on array of id\'s', (done) => {

    done();
  });

});
