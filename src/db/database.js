import 'dotenv/config'
import mysql2 from 'mysql2'

export const db = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DBPORT,
    database: process.env.DATABASE,
})
db.connect((err) =>{
        if(err) throw err;
        console.log('Connected to database');
    })


