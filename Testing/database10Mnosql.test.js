/* global describe, test, expect */
const { MongoClient } = require('mongodb');
const seedDBnoSQL = require('../database/seedDBnoSQL');

const url = 'mongodb://localhost:27017';
const dbname = 'meetuptest';

describe('test data insertion into users', () => {
  const table = 'users';
  test('insert 10000 documents in a bulk write', (done) => {
    seedDBnoSQL.insert10kDocs(url, dbname, table, (error, result) => {
      if (error) throw error;
      expect(result.insertedCount).toBe(10000);
      done();
    });
  });
  test('modularize insertedCount by providing connection from outside', (done) => {
    MongoClient.connect(url, (err, client) => {
      if (err) throw err;
      const db = client.db(dbname);
      const collection = db.collection(table);
      seedDBnoSQL.insert10kDocsNoConnect(table, collection, (error, result) => {
        if (error) throw error;
        expect(result.insertedCount).toBe(10000);
        client.close();
        done();
      });
    });
  });
  test('wrap insert10kDocsNoConnect in MongoClient connect and close', (done) => {
    seedDBnoSQL.openDbInsert10k(url, dbname, table, (result) => {
      expect(result.insertedCount).toBe(10000);
      done();
    });
  });
});
