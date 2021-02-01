const { generateUniqueId } = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { key } = req.body;

        await connection.connect();

        try {
            await connection.query('SELECT name FROM users WHERE id = $1', [key], (err, response) => {
            return res.json({user: response.rows[0]});                
            })
            
        } catch(err) {           
            return res.send(err);
        }
    }
}