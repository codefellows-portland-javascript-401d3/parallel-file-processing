const assert = require('assert');
const create = require('../lib/create');
const read = require('../lib/read');
const fs = require('fs');

const testData = 'test_pidgey';
const testType = 'test_flying';

describe('Create and Read', function() {

  // before(function() {
  //   fs.mkdirSync('.test_files/');
  // });

  it('loads the create library', function() {
    assert.ok(create);
  });

  it('loads the read library', function() {
    assert.ok(read);
  });

  it('creates a file', function(done) {
    create(testType, testData, function(err) {
      if (err) throw new Error(err);
      done();
    });
  });

  // it('correctly stores data', function(done) {
  //   read('.test_files/test-file', function(err,data) {
  //     if(err) throw new Error(err);
  //     else {
  //       if (data != testData) throw new Error('Does not compute.');
  //       done();
  //     }
  //   })
  // })

  after(function() {
    fs.readdir('storage', function(err,folders) {
      const filteredFolders = folders.filter(function(folder) {
        if (folder.includes('test_')) return true;
      })
      filteredFolders.forEach(function(folder) {
        fs.readdir('storage/' + folder, function(err,files) {
          files.forEach(function(file) {
            fs.unlinkSync('storage/' + folder + '/' + file);
          });
          fs.rmdirSync('storage/' + folder); //Yay
        });
      });
    });
  });
});
