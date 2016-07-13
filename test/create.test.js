const assert = require('assert');
const create = require('../lib/create');
const fs = require('fs');

describe('Create', function() {

  before(function() {
      fs.mkdirSync('.test_files');
    });

  it('loads the library', function() {
    assert.ok(create);
  });

  it('creates a file', function(done) {
    create('.test_files/test-file', function() {
      done();
    });
  });

  // it('correctly stores data', function() {

  // })

  after(function() {
      fs.unlinkSync('.test_files/test-file');
      fs.rmdirSync('.test_files/');
    });
});
