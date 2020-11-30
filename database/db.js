const mysql = require('mysql');

// const connection = mysql.createConnection({
// 	host: 'db-modelize-do-user-8371362-0.b.db.ondigitalocean.com',
// 	user: 'doadmin',
// 	password: 'nbg0vzg6cakwsnwe',
// 	database: 'db-modelize',
// 	port: 25060,
// 	ssl: 'REQUIRED'
// });

const connection = mysql.createConnection({
    host: 'sql220.main-hosting.eu',
    user: 'u191982321_hans',
    password: 'RxYAR+F3]c',
    database: 'u191982321_modelize',
});

connection.connect(function (err) {
    if (err) throw err;

    console.log('DB connected');
});

module.exports = connection;