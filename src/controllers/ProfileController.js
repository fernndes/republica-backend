const { connect } = require('../database/connection');
const client = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const user_id = req.headers.authorization;

        // await connection.connect();

        // try {
        //     await connection.query('SELECT city, uf, address, description, title, id FROM home WHERE user_id = $1', [user_id], (err, response) => {
        //         return res.json({home: response.rows});
        //     });
            
        // } catch(err) {            
        //     return res.send(err);
        // }

        connection.connect(function (err, client, done) {
            if (err) {
                return console.error('connexion error', err);
            }
            client.query('SELECT city, uf, address, description, title, id FROM home WHERE user_id = $1', [user_id], function (err, result) {
                
                done();

                if (err) {
                    return console.error('error running query', err);
                }
                return res.json({ home: result.rows });
            });
        });

    }
}