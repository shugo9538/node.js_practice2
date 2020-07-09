const MongoDB = require("mongodb").MongoClient,
  dbUrl = "mongodb://localhost:27017",
  dbName = "recipe_db";

MongoDB.connect(dbUrl, (error, client) => {
  if(error) throw err;
  let db = client.db(dbName);
  db.collection("contacts")
    .find()
    .toArray((error, data) => {
      if(error) throw err;
      console.log(data);
    });

  db.collection("contacts")
    .insert({
      name: "Freddie Mercury",
      email: "fred@queen.com"
    }, (error, db) => {
      if(error) throw err;
      console.log(data);
    });
});
