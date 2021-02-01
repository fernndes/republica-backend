const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const user_id = req.headers.Authorization;

        console.log("Teste ===>", user_id);

        await connection.connect();

        try {
            await connection.query('SELECT * FROM home WHERE id = $1', [user_id], (err, response) => {
                return res.json({home: response.rows[0]});
            });
            
        } catch(err) {            
            return res.send(err);
        }
    }
}