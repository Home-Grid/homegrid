const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://heroku_59jb0t9f:tp71miseiv8b7hih79pks9rc9b@ds063892.mlab.com:63892/heroku_59jb0t9f',
  {
    useMongoClient: true
  }
);

const wordSeed = [
  {
    word: "Zone",
    definition: "Stephen King"

  },

  {
    word: "Harry's Stone",
    definition: "J.K. Rowling"
  },
  {
    word: "Total Recall",
    definition: "Arnold Schwarzenegger"
  },
  {
    word: "Astrophysics",
    definition: "Neil deGrasse Tyson"
  },
  {
    word: "1984",
    definition: "George Orwell"
  },
  {
    word: "The Great Gatsby",
    definition: "F. Scott Fitzgerald"
  },
  {
    word: "Childhood",
    definition: "Trevor Noah"
  }
];

db.Word
  .remove({})
  .then(() => db.Word.collection.insertMany(wordSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
