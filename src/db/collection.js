import 'dotenv/config'
import mongodb from 'mongodb'

const mongoClient = mongodb.MongoClient
const {SPRINT2_LOCAL_MONGODB_HOST, SPRINT2_LOCAL_MONGODB_DATABASE,MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_HOST, MONGO_ATLAS_DATABASE, MONGO_ATLAS_PARAMS} = process.env
const sprint2LocalMongoDBBaseUrl = `mongodb://${SPRINT2_LOCAL_MONGODB_HOST}/`
const sprint2AtlasMongoDBBaseUrl = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}${MONGO_ATLAS_HOST}/?`

mongoClient.connect(sprint2AtlasMongoDBBaseUrl, (error, db) => {
    
    if(error){
        console.log(error.message)
    }

    const database = db.db(`${MONGO_ATLAS_DATABASE}`)
    database.createCollection("tasks", (error, collection) => {
    
        error? console.log(error.message) :
            console.log('Tasks collection created')
            db.close()
    })
})

