const { MongoClient } = require('mongodb');

let mongoclient;
let db;
let collection;
let collectionEvents;
let getRandUser;
let makeQuery;

beforeAll((done) => {
  getRandUser = () => {
    return Math.ceil(Math.random() * 5000000);
  };
  makeQuery = (cb) => {
    const randUser = getRandUser();
    collection.find({ _id: randUser }).hint({ _id: 'hashed' }).toArray((err, docs) => {
      if (err) throw err;
      cb(docs, randUser);
    });
  };
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;
    mongoclient = client;
    db = mongoclient.db('meetup');
    collection = db.collection('users');
    collectionEvents = db.collection('events_users');
    done();
  });
});
afterAll((done) => {
  mongoclient.close(() => {
    done();
  });
});
describe('simple queries with HASH index', () => {
  test('single random query, with HASH index', (done) => {
    makeQuery((docs, randUser) => {
      expect(docs[0]._id).toBe(randUser);
      done();
    });
  });
  test('100 queries, with HASH index', (done) => {
    let counter = 100;
    const callback = (docs, randUser) => {
      if (counter > 0) {
        counter -= 1;
        makeQuery(callback);
      } else {
        expect(docs[0]._id).toBe(randUser);
        done();
      }
    };
    makeQuery(callback);
  });
  test('1000 queries, with HASH index', (done) => {
    let counter = 1000;
    const callback = (docs, randUser) => {
      if (counter > 0) {
        counter -= 1;
        makeQuery(callback);
      } else {
        expect(docs[0]._id).toBe(randUser);
        done();
      }
    };
    makeQuery(callback);
  });
});
describe('join query', () => {
  test('independent queries', (done) => {
    const randEvent = Math.floor(Math.random() * 10000000);
    let counter = 0;
    const cb = (docs, randEvent) => {
      counter -= 1;
      const userId = docs[counter].user_id;
      collection.find({ _id: userId }).hint({ _id: 'hashed' }).toArray((err, result) => {
        if (err) throw err;  
        if (counter > 0) {
          cb(docs, randEvent);
        } else {
          expect(result[0]._id).toBe(userId);
          done();
        }
      });
    };
    collectionEvents.find({ event_id: randEvent }).toArray((err, docs) => {
      if (err) throw err;
      counter = docs.length;
      cb(docs, randEvent);
    });
  });
  test('mongo aggregate', (done) => {
    const eventId = Math.floor(Math.random() * 10000000);
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
      expect(res[0].event_id).toBe(eventId);
      expect(typeof res[0].userGroup).toBe('object');
      done();
    });
  });
});
