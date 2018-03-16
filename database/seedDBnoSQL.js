/* global describe, xdescribe, beforeAll, afterEach, afterAll, test, expect */
const { MongoClient } = require('mongodb');
const fake = require('faker');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const makeInserts = (num) => {
  const inserts = new Array(num);
  for (let i = 0; i < num; i += 1) {
    const insert = {
      insertOne: {
        document: {
          PersonID: i,
          id: fake.internet.userName(),
          first: fake.name.firstName(),
          last: fake.name.lastName(),
          photoURL: fake.image.avatar(),
        },
      },
    };
    inserts[i] = insert;
  }
  return inserts;
};

const insert10kDocs = (url, dbname, table, cb) => {
  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const db = client.db(dbname);
    const collection = db.collection(table);
    const inserts = makeInserts(10000);
    collection.bulkWrite(inserts, { bypassDocumentValidation: true }, (error, result) => {
      client.close();
      cb(error, result);
    });
  });
};

const insert10kDocsNoConnect = (collection, cb) => {
  const inserts = makeInserts(10000);
  collection.bulkWrite(inserts, { bypassDocumentValidation: true }, (error, result) => {
    cb(error, result);
  });
};

const openDbInsert10k = (url, dbname, table, cb) => {
  MongoClient.connect(url, (error, client) => {
    if (error) throw error;
    const db = client.db(dbname);
    const collection = db.collection(table);
    insert10kDocsNoConnect(collection, (error, result) => {
      if (error) throw error;
      const writeResult = result;
      client.close((error) => {
        if (error) throw error;
        cb(writeResult);
      });
    });
  });
};

const insertBatch = (size, url, dbname, table) => {
  let counter = size;
  MongoClient.connect(url, (error, client) => {
    if (error) throw error;
    const db = client.db(dbname);
    const collection = db.collection(table);
    const cb = () => {
      counter -= 10000;
      if (counter > 1) {
        insert10kDocsNoConnect(collection, cb);
      } else {
        client.close((error, result) => {
          if (error) throw error;
          process.exit();
        });
      }
    };
    insert10kDocsNoConnect(collection, cb);
  });
};

const clusterInsert = (url, dbname, table, masterCallback) => {
  let counter = numCPUs;
  const size = 5000000 / numCPUs;
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    const started = Date.now();
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log(worker.process.id, ' is done >^_^>');
      counter -= 1;
      if (counter === 0) {
        console.log('Jobs done! Took: ', Date.now() - started, ' ms');
        masterCallback();
      }
    });
  } else {
    insertBatch(size, url, dbname, table);
  }
};

// const url = 'mongodb://localhost:27017';
// const dbname = 'meetuptest';
// const table = 'users';

// clusterInsert(url, dbname, table, () => {
//   console.log('hollaback girl');
// });

module.exports.insert10kDocs = insert10kDocs;
module.exports.insert10kDocsNoConnect = insert10kDocsNoConnect;
module.exports.openDbInsert10k = openDbInsert10k;
module.exports.clusterInsert = clusterInsert;
