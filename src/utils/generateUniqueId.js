var bcrypt = require('bcryptjs');

function generateUniqueId(key) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(key.toString(), salt);
	return hash
}

module.exports = generateUniqueId;