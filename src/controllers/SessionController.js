const { generateUniqueId } = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { key } = req.body;

        await connection.connect();

        try {
            var user = await connection.query('SELECT name FROM users WHERE id = $1', [key], (err, res) => {
            connection.end();
            return res.json({user: user.rows[0]});                
            })
            
        } catch(err) {           
            return res.send(err);
        }
    }
}