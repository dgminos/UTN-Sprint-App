import 'dotenv/config'
import mongodb from 'mongodb'

export const getTasks = (req, res) => {
    const mongoClient = mongodb.MongoClient
    const {SPRINT2_LOCAL_MONGODB_HOST, SPRINT2_LOCAL_MONGODB_DATABASE, MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_HOST, MONGO_ATLAS_DATABASE, MONGO_ATLAS_PARAMS } = process.env
    const sprint2LocalMongoDBBaseUrl = `mongodb://${SPRINT2_LOCAL_MONGODB_HOST}/`
    const sprint2AtlasMongoDBBaseUrl = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}${MONGO_ATLAS_HOST}/`

    mongoClient.connect(sprint2AtlasMongoDBBaseUrl, (error, db) => {
    const database = db.db(`${MONGO_ATLAS_DATABASE}`)

    if (error){
        console.log(error.message)
    }

    database.collection('tasks').find({}).toArray((error, results) => {

    error? console.log(error.message) :
    res.render('home', {results})
})
})
}

export const createTask = (req, res) => {
    const mongoClient = mongodb.MongoClient
    const {SPRINT2_LOCAL_MONGODB_HOST, SPRINT2_LOCAL_MONGODB_DATABASE, MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_HOST, MONGO_ATLAS_DATABASE, MONGO_ATLAS_PARAMS } = process.env
    const sprint2LocalMongoDBBaseUrl = `mongodb://${SPRINT2_LOCAL_MONGODB_HOST}/`
    const sprint2AtlasMongoDBBaseUrl = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}${MONGO_ATLAS_HOST}/`

    mongoClient.connect(sprint2AtlasMongoDBBaseUrl, (error, db) => {
    const database = db.db(`${MONGO_ATLAS_DATABASE}`)

    if (error){
        console.log(error.message)
    }

    let today = new Date()
    let formattedDate = today.toUTCString()

    const { Title, CreatedBy, Description, Label } = req.body
    database.collection('tasks').insertOne({Title, CreatedBy, Description, Label, TaskDate: formattedDate}, (error, result) => {
    
        error? console.log(error.message) :
            console.log('Data inserted in tasks collection:'+ JSON.stringify(req.body))
            res.redirect('/')
            return result
    })
})
}

export const getTaskById = (req, res) => {
    const mongoClient = mongodb.MongoClient
    const {SPRINT2_LOCAL_MONGODB_HOST, SPRINT2_LOCAL_MONGODB_DATABASE, MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_HOST, MONGO_ATLAS_DATABASE, MONGO_ATLAS_PARAMS } = process.env
    const sprint2LocalMongoDBBaseUrl = `mongodb://${SPRINT2_LOCAL_MONGODB_HOST}/`
    const sprint2AtlasMongoDBBaseUrl = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}${MONGO_ATLAS_HOST}/`

    mongoClient.connect(sprint2AtlasMongoDBBaseUrl, (error, db) => {
    const database = db.db(`${MONGO_ATLAS_DATABASE}`)
    
        if(error){
            console.log(error.message)
        }

    const id  = req.params.id
    const ObjectId = mongodb.ObjectId
    database.collection('tasks').findOne({_id: ObjectId(id)},(error, result) => {
    
        error? console.log(error.message) :
            res.render('editTask', {result})
    })
})
}

export const updateTask = (req, res) => {
    const mongoClient = mongodb.MongoClient
    const {SPRINT2_LOCAL_MONGODB_HOST, SPRINT2_LOCAL_MONGODB_DATABASE, MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_HOST, MONGO_ATLAS_DATABASE, MONGO_ATLAS_PARAMS } = process.env
    const sprint2LocalMongoDBBaseUrl = `mongodb://${SPRINT2_LOCAL_MONGODB_HOST}/`
    const sprint2AtlasMongoDBBaseUrl = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}${MONGO_ATLAS_HOST}/`

    mongoClient.connect(sprint2AtlasMongoDBBaseUrl, (error, db) => {
    const database = db.db(`${MONGO_ATLAS_DATABASE}`)
    
        if (error){
            console.log(error.message)
        }

        let today = new Date()
        let formattedDate = today.toUTCString()
        const ObjectId = mongodb.ObjectId
        const id  = req.params.id
        const { Title, CreatedBy, Description, Label } = req.body
        database.collection('tasks').findOne({_id: ObjectId(id)}, {$set: {Title, CreatedBy, Description, TaskDate: formattedDate, Label}} ,(error, result) => { 
            
            error? console.log(error.message) :
           database.collection('tasks').replaceOne({_id: ObjectId(id)},{Title, CreatedBy, Description, TaskDate: formattedDate, Label})
            console.log(req.body)
                res.redirect('/')
    })
})
}

export const deleteTask = (req, res) => {
    const mongoClient = mongodb.MongoClient
    const {SPRINT2_LOCAL_MONGODB_HOST, SPRINT2_LOCAL_MONGODB_DATABASE, MONGO_ATLAS_USER, MONGO_ATLAS_PASSWORD, MONGO_ATLAS_HOST, MONGO_ATLAS_DATABASE, MONGO_ATLAS_PARAMS } = process.env
    const sprint2LocalMongoDBBaseUrl = `mongodb://${SPRINT2_LOCAL_MONGODB_HOST}/`
    const sprint2AtlasMongoDBBaseUrl = `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}${MONGO_ATLAS_HOST}/`

    mongoClient.connect(sprint2AtlasMongoDBBaseUrl, (error, db) => {
    const database = db.db(`${MONGO_ATLAS_DATABASE}`)
    
        if (error){
            console.log(error.message)
        }
        const ObjectId = mongodb.ObjectId
        const id = req.params.id
        database.collection('tasks').deleteOne({_id: ObjectId(id)}, (error, result) => {
        
            error? console.log(error.message) : 
        res.redirect('/')
    })
})
}