var mysql = require('mysql');
const { password } = require('../config/database');
const database = require('../config/database');
var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'my_db'
});
db.connect();

module.exports = db;