const mysql = require('mysql2')
const express = require('express')

const app = express()
const port = 3000

const config = {
    host: 'app-db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const connection = mysql.createConnection(config)
connection.query(`DROP TABLE IF EXISTS nodedb.people`)
connection.query(
    `
    CREATE TABLE nodedb.people (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL
    )`
)
connection.query(`INSERT INTO nodedb.people(name) values('Lucas')`)

app.get('/', (req,res) => {
    connection.query(
        'SELECT name FROM nodedb.people',
        function (error, results, fields) {
            if (error) throw error;
            res.send('<h1>Full Cycle</h1>' + results[0].name);
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})