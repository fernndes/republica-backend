const { generateUniqueId } = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { key } = req.body;

        await connection.connect();

		var user = await connection.query('SELECT name FROM users WHERE id = $1', [key], (err, response) => {
			if (err) {
                console.log(err);
                res.json({ error: "No USER found with this ID" });
                connection.end();	
			 } else {
                 console.log("Works...");
                 connection.end();	
			  }

			
        });
        
        
        
        return res.json({user: user});
    }
}