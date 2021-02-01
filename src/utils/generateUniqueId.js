var bcrypt = require('bcryptjs');

function generateUniqueId() {
	var key = Math.random().toString(36).slice(2);
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(`${key}`, salt);
	return key
}


module.exports = { generateUniqueId };