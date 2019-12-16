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

    db.collection("users")
      .updateOne(
        {
          _id: new ObjectID("5df26cb918c66e5fabaac95e")
        },
        {
          $set: {
            name: "Adamek"
          }
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
    db.collection("tasks")
      .updateMany({ completed: false }, { $set: { completed: true } })
      .then(() => {
        console.log("Done !");
      })
      .catch(() => {
        console.log("Error updatemany");
      });
  }
);
