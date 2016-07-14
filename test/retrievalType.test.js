const fs = require('fs');
const assert = require('chai').assert;
const path = require('path');
const retrieval = require('../lib/retrieval');
const retrievalType = require('../lib/retrievalType');

describe('it retrieves the data based on the type', () => {
	it('has type bike', (done) => {
		retrievalType(__dirname + '/../data/', 'bike', (err, selected) => {
			assert.deepEqual(selected, 
			[{ "id": "1", "type": "bike", "make": "Schwinn", "model": "Varsity"},
			{"id": "2", "type": "bike", "make": "Pake", "model": "RumRunner"},
			{ "id": "3", "type": "bike", "make": "Specialized", "model": "Cross-Elite"}]);
			done();
		}); 
	});
}); 