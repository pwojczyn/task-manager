const { MongoClient, ObjectID } = require("mongodb");

// local mongodb
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
// remote mongodb mLab
// const connectionURL = 'mongodb://test100:test100@ds353738.mlab.com:53738/heroku_nnn46r7g'
// const databaseName = 'heroku_nnn46r7g'

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected corretly!");

    const db = client.db(databaseName);

    db.collection("users").findOne(
      { _id: new ObjectID("5df271a167f9cc04dfb4675b") },
      (error, user) => {
        if (error) {
          return console.log("Unable to fetch data");
        }
        console.log(user);
      }
    );
    db.collection("users")
      .find({ age: 39 })
      .toArray((error, users) => {
        console.log(users);
      });
    db.collection("tasks").findOne(
      { _id: new ObjectID("5df2731291cf8610ae97f54e") },
      (error, task) => {
        // console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
