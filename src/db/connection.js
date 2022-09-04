
import mongodb from 'mongodb'

const mongoClient = mongodb.MongoClient
const {SPRINT2_LOCAL_MONGODB_HOST, SPRINT2_LOCAL_MONGODB_DATABASE, MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_HOST, MONGO_ATLAS_DATABASE, MONGO_ATLAS_PARAMS } = process.env

const sprint2LocalMongoDBUrl = `mongodb://${SPRINT2_LOCAL_MONGODB_HOST}/${SPRINT2_LOCAL_MONGODB_DATABASE}`
const sprint2AtlasMongoDBUrl = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}${MONGO_ATLAS_HOST}/?${MONGO_ATLAS_PARAMS}`

try {
    mongoClient.connect(sprint2AtlasMongoDBUrl, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    console.log('Connection has been established successfully')
} catch (error) {
    console.error('Unable to connect to the database')
}





