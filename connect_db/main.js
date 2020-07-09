const mongoose = require("mongoose");
mongoose.connect(
  "mongodb:/localhost:27017/recipe_db",
  {useNewUrlParser: true}
);

const db = mongoose.connection;

const subscriberSChema = mongoose.Schema({
  name : String,
  email : String,
  zipCode : Number
});

var Subscriber = mongoose.model("Subscriber", subscriberSChema);

var subscriber1 = new Subscriber({
  // name : encodeURIComponent("ABC"),
  // email: encodeURIComponent("abc@abcdefg.com")
  name : "ABC",
  email: "abc@abcdefg.com"
});

subscriber1.save((error, saveDocument) => {
  if (error) console.log(error);
  console.log(saveDocument);
});

Subscriber.create(
  {
    name : "ABCDE",
    email : "abcde@abcdefg222.com"
  },
  function(error, saveDocument) {
    if(eroor) console.log(error);
    console.log(saveDocument);
  }
);

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});
