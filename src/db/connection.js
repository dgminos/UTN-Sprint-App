import 'dotenv/config'
import mysql2 from 'mysql2'

export const connection = mysql2.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
    database: process.env.DB,
})
connection.connect((err) =>{
        if(err) throw err;
        console.log('Connected to database');
    })


