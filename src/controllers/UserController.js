const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
	async create(req, res) {
		const { name, email, whatsapp, city, uf, key } = req.body;

		const id = generateUniqueId(key);

		await connection.open();

		await connection.query('INSERT INTO users(id, name, email, whatsapp, city, uf) values($1, $2, $3, $4, $5, $6)', [id, name, email, whatsapp, city, uf], (err, res) => {
			if (err) {
	    		console.log(err);
			 } else {
			 	console.log("Works...");
			  }
		});

		await connection.end();
	}
}