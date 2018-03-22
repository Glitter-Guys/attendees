const { MongoClient } = require('mongodb');

MongoClient('mongodb://localhost:27017', (err, client) => {
  if (err) throw err;
  const db = client.db('meetup');
  const collection = db.collection('users');
  console.log(collection);
  collection.createIndex({ PersonID: 'hashed' }, (err, indexName) => {
    console.log('creating index');
    if (err) throw err;
    console.log(indexName);
  });
});
