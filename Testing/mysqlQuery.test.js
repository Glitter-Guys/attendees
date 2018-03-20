const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'meetup',
  multipleStatements: true,
  connectTimeout: 20000,
});
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'meetup',
  connectionLimit: 100,
});
let eventId = 2651975;
const getRandEvents = (length) => {
  const randEvents = new Array(length);
  return randEvents.fill(0).map(() => {
    return Math.ceil(Math.random() * 10000000);
  });
};
const randEvents = getRandEvents(1000);

describe('test single query', () => {
  test('query all rows matching eventId of events_users', (done) => {
    const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
    connection.query(queryAttendees, (error, results) => {
      connection.end();
      if (error) throw error;
      expect(results.length).toBe(7);
      done();
    });
  });
  test('100 queries in sequence with pool', (done) => {
    let counter = 100;
    const cb = (error, results) => {
      if (error) throw error;
      counter -= 1;
      if (counter < 1) {
        expect(true).toBe(true);
        done();
      }
    };
    for (let i = 0; i < counter; i += 1) {
      eventId = randEvents[i];
      const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
      pool.query(queryAttendees, cb);
    }
  }, 10000);
  test('100 queries in parallel with pool', (done) => {
    let counter = 100;
    const cb = (error, results) => {
      if (error) throw error;
      counter -= 1;
      if (counter < 1) {
        expect(true).toBe(true);
        done();
      }
    };
    for (let i = 0; i < counter; i += 1) {
      eventId = randEvents[i];
      const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
      pool.getConnection((error, connect) => {
        if (error) throw error;
        connect.query(queryAttendees, (error, results) => {
          connect.release();
          cb(error, results);
        });
      });
    }
  });
  test('500 queries in parallel with pool', (done) => {
    let counter = 500;
    const cb = (error, results) => {
      if (error) throw error;
      counter -= 1;
      console.log('Counter is', counter, results);
      if (counter < 1) {
        expect(true).toBe(true);
        done();
      }
    };
    for (let i = 0; i < counter; i += 1) {
      eventId = randEvents[i];
      const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
      pool.getConnection((error, connect) => {
        if (error) throw error;
        connect.query(queryAttendees, (error, results) => {
          cb(error, results);
        });
      });
    }
  });
  xtest('500 queries in parallel without pool', (done) => {
    let counter = 500;
    const cb = (error, results) => {
      if (error) throw error;
      counter -= 1;
      if (counter < 1) {
        expect(true).toBe(true);
        done();
      }
    };
    for (let i = 0; i < 500; i += 1) {
      eventId = randEvents[i];
      const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
      connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'meetup',
        multipleStatements: true,
        connectTimeout: 20000,
      });
      connection.query(queryAttendees, (error, results) => {
        if (error) throw error;
        cb(error, results);
      });
    }
  }, 60000);
});
