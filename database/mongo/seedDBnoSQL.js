const { MongoClient } = require('mongodb');
const fake = require('faker');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const makeInserts = (num, workerId, cycle, size) => {
  const inserts = new Array(num);
  const userStart = ((workerId - 1) * size) + (cycle * num);
  for (let i = 0; i < num; i += 1) {
    const insert = {
      insertOne: {
        document: {
          // _id: i + userStart,
          PersonID: i + userStart,
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

const makeEventInserts = (num) => {
  const inserts = new Array(num);
  for (let i = 0; i < num; i += 1) {
    const insert = {
      insertOne: {
        document: {
          event_id: Math.floor(Math.random() * 10000000),
          user_id: Math.floor(Math.random() * 5000000),
        },
      },
    };
    inserts[i] = insert;
  }
  return inserts;
};

const insert10kDocsNoConnect = (workerId, cycle, size, forTable, collection, cb) => {
  let inserts;
  if (forTable === 'users') inserts = makeInserts(10000, workerId, cycle, size);
  if (forTable === 'events_users') inserts = makeEventInserts(10000);
  collection.bulkWrite(inserts, { bypassDocumentValidation: true }, (error, result) => {
    cb(error, result);
  });
};

const insertBatch = (workerId, size, url, dbname, table) => {
  let counter = size;
  let cycle = 0;
  MongoClient.connect(url, (error, client) => {
    if (error) throw error;
    const db = client.db(dbname);
    const collection = db.collection(table);
    const cb = () => {
      counter -= 10000;
      cycle += 1;
      if (counter > 1) {
        insert10kDocsNoConnect(workerId, cycle, size, table, collection, cb);
      } else {
        // when finished with batch, close client connection then exit cluster process
        client.close((error, result) => {
          if (error) throw error;
          process.exit();
        });
      }
    };
    insert10kDocsNoConnect(workerId, cycle, size, table, collection, cb);
  });
};

const clusterInsert = (url, dbname, table, masterCallback) => {
  let size;
  if (table === 'users') size = 5000000 / numCPUs;
  if (table === 'events_users') size = 50000000 / numCPUs;
  let counter = numCPUs;
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    const started = Date.now();
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log('process', counter, ' is done >^_^>');
      counter -= 1;
      if (counter === 0) {
        cluster.disconnect(() => {
          console.log('Jobs done! Took: ', Date.now() - started, ' ms');
          masterCallback();
        });
      }
    });
  } else {
    console.log(cluster.worker.id);
    insertBatch(cluster.worker.id, size, url, dbname, table);
  }
};

module.exports.makeInserts = makeInserts;
module.exports.makeEventInserts = makeEventInserts;
module.exports.insert10kDocsNoConnect = insert10kDocsNoConnect;
module.exports.clusterInsert = clusterInsert;
