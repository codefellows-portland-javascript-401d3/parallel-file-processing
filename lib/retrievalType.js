const retrieval = require('./retrieval');

//retrieves objects with corresponding type
module.exports = function retrieveType(directory, type, callback) {
	retrieval(directory, (err, fileArray) => {
		if(err) () => {
			return callback(err);
		};
		let selected = [];
		fileArray.forEach(f => {
			if (f.type === type) selected.push(f);
		});
		callback(null, selected);	
	});
	
};


