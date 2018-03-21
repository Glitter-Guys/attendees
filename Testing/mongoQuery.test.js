const { MongoClient } = require('mongodb');
let db;
let collection;
beforeAll((done) => {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;
    db = client.db('meetup');
    collection = db.collection('users');
    done();
  });
});
describe('queries', () => {
  test('single query, no optimization', (done) => {
    collection.find({ PersonID: 0 }).toArray((err, docs) => {
      if (err) throw err;
      expect(docs[0].first).toBe('Delbert');
      done();
    });
  });
});
