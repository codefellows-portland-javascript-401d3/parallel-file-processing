const fs = require('fs');
const assert = require('chai').assert;
const path = require('path');
const retrieval = require('../lib/retrieval');

describe('retreives files from data and in order', () => {
	it('gets the files', done => {

		retrieval(__dirname + '/../data/', (err, filesArr) => {
			if(err) {
				return done(err);
			} else {
				assert.deepEqual(filesArr, [
					{ "id": "1", "type": "bike", "make": "Schwinn", "model": "Varsity"},
					{"id": "2", "type": "bike", "make": "Pake", "model": "RumRunner"},
					{ "id": "3", "type": "bike", "make": "Specialized", "model": "Cross-Elite"},
					{ "id": "4", "type": "instrument", "make": "Esquire", "model": "Bass"},
					{ "id": "5", "type": "instrument", "make": "Gibson", "model": "LesPaul"},
					{ "id": "6", "type": "instrument", "make": "Lee", "model": "Cao"}
				]);
				done();
			}
		});
	});
});

