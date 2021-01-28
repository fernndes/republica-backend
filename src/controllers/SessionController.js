const { generateUniqueId } = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { key } = req.body;

        await connection.connect();

        try {
            var user = await connection.query('SELECT * FROM users WHERE id = $1', [key]);
            return res.json({user: user.rows[0]});
        } finally {
            // Make sure to release the client before any error handling,
            // just in case the error handling itself throws an error.
            client.release()
          }
    }
}