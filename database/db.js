const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'db-modelize-do-user-8371362-0.b.db.ondigitalocean.com',
	user: 'doadmin',
	password: process.env.DB_PASS,
	database: 'db-modelize',
});

// const connection = mysql.createConnection({
//     host: '213.190.6.43',
//     user: 'u191982321_dey',
//     password: '#Princeandy95',
//     database: 'u191982321_api',
// });

connection.connect(function (err) {
    if (err) throw err;

    console.log('DB connected');
});

module.exports = connection;