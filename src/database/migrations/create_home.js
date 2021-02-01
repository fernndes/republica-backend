const db = require("../connection")

async function createTable() {
    await db.connect()

    await db.query(`CREATE TABLE home(
        id SERIAL NOT NULL ,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        uf VARCHAR(2) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )`, (err, res) => {
		if (err) {
    		console.log(err)
		 } else {
		 	console.log("Created...")
		  }
	})

    await db.end()
}

createTable();