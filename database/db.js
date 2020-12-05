const mysql = require('mysql');

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'modelize_db',
// });

const connection = mysql.createConnection({
	host: 'us-cdbr-east-02.cleardb.com',
	user: 'ba3e368f04da2a',
	password: '15162fd3',
	// database: 'u191982321_api',
});

connection.connect(function (err) {
    if (err) throw err;

    console.log('DB connected');
});

module.exports = connection;