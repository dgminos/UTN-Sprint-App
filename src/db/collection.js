import mongodb from 'mongodb'
import 'dotenv/config'
import { client } from './connection.js'

const mongoClient = mongodb.MongoClient
const {SPRINT2_MONGODB_HOST, SPRINT2_MONGODB_DATABASE} = process.env
const MONGODB_URI = `mongodb://${SPRINT2_MONGODB_HOST}/`

mongoClient.connect(MONGODB_URI, (error, db) => {
    
    if(error){
        console.log(error.message)
    }

    const database = db.db(`${SPRINT2_MONGODB_DATABASE}`)
    database.createCollection('tasks', (error, collection) => {
    
        error? console.log(error.message) :
            console.log('Tasks collection created')
            db.close()
    })
})
