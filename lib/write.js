const fs = require('fs');
const retrieval = require('./retrieval');

//writes a new file 
module.exports = function writeFile(directory, id) {
	retrieval(directory, (err, filesArr) => {
		filesArr.forEach((file) => {
			fs.writeFileSync('sample.JSON', '{"id": id}', { encoding: 'utf-8' }, () => {
				console.log(id);
			});
		});
	});
};
