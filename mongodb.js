// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {
    MongoClient,
    ObjectID
} = require('mongodb')

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

// local mongodb
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// remote mongodb mLab
// const connectionURL = 'mongodb://test100:test100@ds353738.mlab.com:53738/heroku_nnn46r7g'
// const databaseName = 'heroku_nnn46r7g'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log('Connected corretly!')

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 62
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'Gunther',
    //     age: 27
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert many users!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([{
    //     description: 'Buy new tv',
    //     completed: false
    // }, {
    //     description: 'Buy new iPhone',
    //     completed: false
    // }, {
    //     description: 'Buy new shoes',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert many tasks !')
    //     }
    //     console.log(result.ops)
    // })
})