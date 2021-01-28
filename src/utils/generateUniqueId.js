var bcrypt = require('bcryptjs');

function generateUniqueId(key) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(`${key}`, salt);
	console.log(hash)
	return hash
}

module.exports = generateUniqueId;