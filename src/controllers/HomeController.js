const connection = require('../database/connection');

module.exports = {
	async create(req, res, next) {
        const { city, uf, address, description, title } = req.body;
        const user_id = req.headers.authorization;

        await connection.connect();
        
        try {
            await connection.query('INSERT INTO users(city, uf, address, description, title, user_id) VALUES ($1, $2, $3, $4, $5)', [city, uf, address, description, title, user_id])
            res.send('Success');
            return connection.end();
        } catch (error) {
            res.send(error);
            return connection.end();
        }
	}
}