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
    word: "Profligate",
    definition: "adjective: spending resources recklessly or wastefully"

  },

  {
    word: "Intimate",
    definition: "verb: to suggest something subtly"
  },
  {
    word: "Chastise",
    definition: "verb: to reprimand harshly"
  },
  {
    word: "Censure",
    definition: "verb: to express strong disapproval"
  },
  {
    word: "Wanting",
    definition: "adjective: lacking"
  },
  {
    word: "Undermine",
    definition: "verb: to weaken (usually paired with an abstract term)"
  },
  {
    word: "Venerate",
    definition: "verb: to respect deeply"
  },
  {
    word: "Obscure",
    definition: "verb: make unclear"
  },
  {
    word: "Eschew",
    definition: "verb: avoid and stay away from deliberately; stay clear of"
  },
  {
    word: "Meticulous",
    definition: "adjective: marked by extreme care in treatment of details"
  },
  {
    word: "Impudent",
    definition: "adjective: improperly forward or bold"
  },
  {
    word: "Incisive",
    definition: "adjective: intelligently analytical and clear-thinking"
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
