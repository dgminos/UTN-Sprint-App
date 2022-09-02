
import mongodb from 'mongodb'

export const mongoClient = mongodb.MongoClient
const {SPRINT2_MONGODB_HOST, SPRINT2_MONGODB_DATABASE} = process.env

export const mongoDBURI = `mongodb://${SPRINT2_MONGODB_HOST}/${SPRINT2_MONGODB_DATABASE}`

mongoClient.connect(mongoDBURI, (error, db) => {
    
    error? console.log(error.message) :
    console.log('Database connected')  
})



