/* global describe, xdescribe, beforeAll, afterEach, afterAll, test, expect */
const mysql = require('mysql');
const database = require('../database/seedDB10M');

let connection;
let pool;
let users;

describe('test data insertion', () => {
  beforeAll(() => {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'meetuptest',
      multipleStatements: true,
    });
    pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'meetuptest',
    });
  });
  afterEach((done) => {
    connection.query('DELETE FROM users', () => {
      connection.query('DELETE FROM events_users', () => {
        // connection.end();
        done();
      });
    });
  });
  afterAll(() => {
    connection.end();
    pool.end();
  });
  test('get 5k users from faker, format into array', () => {
    users = database.generateFakeData();
    expect(users.length).toBe(5000);
    expect(users[4999].length).toBe(4);
    expect(typeof users[4999][0]).toBe('string');
    expect(typeof users[4999][1]).toBe('string');
    expect(typeof users[4999][2]).toBe('string');
    expect(typeof users[4999][3]).toBe('string');
  });
  test('insert 5k records at once into db', (done) => {
    database.insertIntoDB(connection, users, (result) => {
      expect(result.affectedRows).toBe(5000);
      done();
    });
  });
  test('insert 10k records at once into db', (done) => {
    users = database.generateFakeData(10000);
    expect(users.length).toBe(10000);
    database.insertIntoDB(connection, users, (result) => {
      expect(result.affectedRows).toBe(10000);
      done();
    });
  });
  test('insert 100k records at once into db', (done) => {
    users = database.generateFakeData(100000);
    expect(users.length).toBe(100000);
    database.insertIntoDB(connection, users, (result) => {
      expect(result.affectedRows).toBe(100000);
      done();
    });
  });
  xtest('insert 5 million records by 100k', (done) => {
    database.insertBy100k(50, connection, () => {
      connection.query('SELECT COUNT (*) FROM users', (error, results) => {
        if (error) throw error;
        expect(results[0]['COUNT (*)']).toBe(5000000);
        done();
      });
    });
  }, 200000);
  test('usersEvents - create fake data for 2 users, 10 events each', () => {
    const fakeData = database.generateFakeEventsData(1, 2, 10);
    expect(fakeData.length).toBe(20);
    expect(fakeData[0][0]).toBeLessThanOrEqual(5000000);
    expect(fakeData[0][1]).toBeLessThanOrEqual(10000000);
  });
  test('usersEvents - create fake data for 10000 users, 10 events each', () => {
    const fakeData = database.generateFakeEventsData(1, 10000, 10);
    expect(fakeData.length).toBe(100000);
    expect(fakeData[0][0]).toBeLessThanOrEqual(5000000);
    expect(fakeData[0][1]).toBeLessThanOrEqual(10000000);
  });
  test('usersEvents - write 100000 records to events_users', (done) => {
    const fakeData = database.generateFakeEventsData(1, 10000, 10);
    database.insertIntoEventsDB(connection, fakeData, (result) => {
      expect(result.affectedRows).toBe(100000);
      done();
    });
  });
  test('usersEvents - create 100000 records starting at user # 10001', () => {
    const fakeData2 = database.generateFakeEventsData(10001, 10000, 10);
    expect(fakeData2.length).toBe(100000);
    expect(fakeData2[0][0]).toBeLessThanOrEqual(5000000);
    expect(fakeData2[0][1]).toBeLessThanOrEqual(10000000);
  });
  xtest('usersEvents - write 50M records to events_users', (done) => {
    database.insertBy100kEvents(500, connection, () => {
      connection.query('SELECT COUNT (*) FROM events_users', (error, results) => {
        if (error) throw error;
        expect(results[0]['COUNT (*)']).toBe(50000000);
        done();
      });
    });
  }, 300000);
});
