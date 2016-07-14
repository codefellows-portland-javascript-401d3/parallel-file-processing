const fs = require('fs');

//retrieves content of files in a directory
module.exports = function retrieveFiles(directory, callback) {
	fs.readdir(directory, (err, files) => {
		if(err) () => {
			return callback(err);
		};
		var filesArr = [];
		files.forEach((file, index) => {
			fs.readFile(`${directory}/${file}`, { encoding: 'utf-8' }, (err, fileContent) => {
				if(err) return callback(err);
				filesArr.push(JSON.parse(fileContent));
				filesArr.sort(function(a, b) {
					return parseFloat(a.id) - parseFloat(b.id);
				});
				if(filesArr.length === files.length) {
					callback(null, filesArr);
				}
			});
		});
	});	
};


		