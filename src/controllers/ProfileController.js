const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const user_id = req.headers.authorization;

        await connection.connect();

        try {
            await connection.query('SELECT city, uf, address, description, title FROM home WHERE user_id = $1', [user_id], (err, response) => {
                return res.json({home: response.rows});
            });
            
        } catch(err) {            
            return res.send(err);
        }
    }
}