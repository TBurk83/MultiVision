var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 1337
	},
	production: {
		db: 'mongodb://tburkholder:multivision@ds063439.mongolab.com:63439/multivision83',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}