const mysql = require('mysql2');

let connection;
let pool;
let eventId;
let getRandEvents;
let randEvents;
let poolConnect;
let poolQuery;

xbeforeAll(() => {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'meetup',
    multipleStatements: true,
    connectTimeout: 20000,
  });
  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'meetup',
    connectionLimit: 100,
  });
  eventId = 2651975;
  getRandEvents = (length) => {
    const randEvents = new Array(length);
    return randEvents.fill(0).map(() => {
      return Math.ceil(Math.random() * 10000000);
    });
  };
  randEvents = getRandEvents(1000);
  poolConnect = () => {
    return new Promise((resolve, reject) => {
      pool.getConnection((error, connection) => {
        if (error) reject(error);
        resolve(connection);
      });
    });
  };
  poolQuery = (queryString, connection) => {
    return new Promise((resolve, reject) => {
      connection.query(queryString, (error, results) => {
        connection.release();
        if (error) reject(error);
        resolve(results);
      });
    });
  };
});

xdescribe('test single query', () => {
  test('query all rows matching eventId of events_users', (done) => {
    const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
    connection.query(queryAttendees, (error, results) => {
      connection.end();
      if (error) throw error;
      expect(results.length).toBe(7);
      done();
    });
  });
  test('100 queries (the same) promisified with pool', (done) => {
    const queryString = 'SELECT * FROM events_users WHERE event_id = 1';
    const queryAsyncLoop = async (queryString, i) => {
      const connection = await poolConnect();
      const results = await poolQuery(queryString, connection);
      if (i === 99) {
        expect(results[0].user_id).toBe(1656149);
        done();
      }
    };
    for (let i = 0; i < 100; i += 1) {
      queryAsyncLoop(queryString, i);
    }
  });
  test('400 queries (SELECT id=1) promisified with pool', (done) => {
    const queryString = 'SELECT * FROM events_users WHERE event_id = 1';
    const queryAsyncLoop = async (queryString, i) => {
      const connection = await poolConnect();
      const results = await poolQuery(queryString, connection);
      if (i === 399) {
        expect(results[0].user_id).toBe(1656149);
        done();
      }
    };
    for (let i = 0; i < 400; i += 1) {
      queryAsyncLoop(queryString, i);
    }
  });
  test('100 random queries promisified with pool', (done) => {
    const queryAsyncLoop = async (queryString, i) => {
      const connection = await poolConnect();
      const results = await poolQuery(queryString, connection);
      if (i === 99) {
        console.log(results);
        expect.anything(results);
        done();
      }
    };
    randEvents = getRandEvents(100);
    for (let i = 0; i < 100; i += 1) {
      const event = randEvents[i];
      const queryString = `SELECT * FROM events_users WHERE event_id = '${event}'`;
      queryAsyncLoop(queryString, i);
    }
  });
});
