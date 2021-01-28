const { generateUniqueId } = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { key } = req.body;

        await connection.connect();

        try {
            var user = await connection.query('SELECT * FROM users WHERE id = $1', [key]);
            res.json({user: user.rows[0]});
            return connection.end();
        } catch(err) {
            res.send(err);
            return connection.end();
        }
    }
}