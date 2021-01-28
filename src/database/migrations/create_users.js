const db = require("../connection")

async function createTable() {
    await db.connect()

    await db.query(`CREATE TABLE users(
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        uf VARCHAR(2) NOT NULL
    )`, (err, res) => {
		if (err) {
    		console.log(err)
		 } else {
		 	console.log("Created...")
		  }
	})

    await db.end()

    return response.status(204).send();
}

createTable();