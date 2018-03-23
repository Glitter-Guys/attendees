const { MongoClient } = require('mongodb');

let mongoclient;
let collectionEvents;
const agg = (eventId, cb) => {
  collectionEvents.aggregate([
    {
      $match: { event_id: eventId },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'user_id',
        foreignField: '_id',
        as: 'userGroup',
      },
    },
  ], null).toArray((err, res) => {
    if (err) throw err;
    cb(err, res);
  });
};
let counter = 100;
const start = Date.now();
const cb = (err, res) => {
  counter -= 1;
  if (counter < 1) {
    mongoclient.close();
    console.log(Date.now() - start);
    console.log(res);
  } else {
    const event = Math.floor(Math.random() * 10000000);
    agg(event, cb);
  }
};
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err;
  mongoclient = client;
  const db = mongoclient.db('meetup');
  collectionEvents = db.collection('events_users');
  const event = Math.floor(Math.random() * 10000000);
  console.log(event);
  agg(event, cb);
});
module.exports.agg = agg;
module.exports.mongoclient = mongoclient;
