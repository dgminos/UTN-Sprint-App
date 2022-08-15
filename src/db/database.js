
import mysql from 'mysql2'

export const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
    database: process.env.DATABASE,
})
connection.connect((err) =>{
        if(err) throw err;
        console.log('Connected to database');
    })
module.exports = connection;