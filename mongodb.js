const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
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

    db.collection('users').insertOne({
        name: 'Piotr',
        age: 39
    })
})