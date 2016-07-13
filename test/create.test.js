const assert = require('assert');
const create = require('../lib/create');
const read = require('../lib/read');
const fs = require('fs');

const testData = '12345';

describe('Create and Read', function() {

  before(function() {
      fs.mkdirSync('.test_files/');
    });

  it('loads the create library', function() {
    assert.ok(create);
  });

  it('loads the read library', function() {
    assert.ok(read);
  });

  it('creates a file', function(done) {
    create('.test_files/test-file', testData, function() {
      done();
    });
  });

  it('correctly stores data', function(done) {
    read('.test_files/test-file', function(err,data) {
      if(err) throw new Error(err);
      else {
        if (data != testData) throw new Error('Does not compute.');
        done();
      }
    })
  })

  after(function() {
      fs.unlinkSync('.test_files/test-file');
      fs.rmdirSync('.test_files/');
    });
});

