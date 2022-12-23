require('dotenv').config()
const mysql = require('mysql')
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});/*
var sql = `insert into g4o2 (username, message, message_date) values (${username}, ${message}, ${date})`
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});*/
con.query('SELECT * from g4o2', (err, rows, fields) => {
  if (err) throw err

  rows = rows.map(v => Object.assign({}, v));
  console.log(rows)
})

con.end(); 