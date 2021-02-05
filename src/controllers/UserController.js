const { generateUniqueId } = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
	async create(req, res, next) {
		const { name, email, whatsapp, city, uf } = req.body;

		const id = generateUniqueId();

		// await connection.connect();

		// await connection.query('INSERT INTO users(id, name, email, whatsapp, city, uf) VALUES ($1, $2, $3, $4, $5, $6)', [id, name, email, whatsapp, city, uf], (err, res) => {
		// 	if (err) {
	    // 		console.log(err);
		// 	 } else {
		// 	 	console.log("Works...");
		// 	  }	
		// });

		// return res.send({id});

		connection.connect(function (err, client, done) {
            if (err) {
                return console.error('connexion error', err);
            }
            client.query('INSERT INTO users(id, name, email, whatsapp, city, uf) VALUES ($1, $2, $3, $4, $5, $6)', [id, name, email, whatsapp, city, uf], function (err, result) {
                
                done();

                if (err) {
                    return console.error('error running query', err);
                }
                return res.send('Success');
            });
        });
	}
}