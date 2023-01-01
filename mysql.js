// require('dotenv').config()
const mysql = require('mysql')
var con = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12561191',
  password: 'JFfUUVYYB3',
  database: 'sql12561191'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});
/*
var sql = `insert into g4o2 (username, message, message_date) values (${username}, ${message}, ${date})`
con.query(sql, function(err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});
*/
con.query('SELECT * from g4o2', (err, rows, fields) => {
  if (err) throw err

  rows = rows.map(v => Object.assign({}, v));
  // console.log(rows)
  rows.forEach(element => {
    console.log(element['message'])
  });
  console.log(rows)
})

con.end(); 