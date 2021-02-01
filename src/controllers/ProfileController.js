const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const user_id = req.headers.authorization;

        await connection.connect();

        try {
            var home = await connection.query('SELECT * FROM home WHERE id = $1', [user_id], (err, res) => {
                await connection.end();
                return res.json({home: home.rows[0]});
            });
            
        } catch(err) {            
            return res.send(err);
        }
    }
}