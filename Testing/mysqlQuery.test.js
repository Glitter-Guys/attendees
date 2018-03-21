const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'meetup',
  multipleStatements: true,
  connectTimeout: 20000,
});
const eventId = 2651975; 

describe('test single query', () => {
  test('query all rows matching eventId of events_users', (done) => {
    const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
    connection.query(queryAttendees, (error, results) => {
      connection.end();
      if (error) throw error;
      expect(results.length).toBe(6);
      done();
    });
  }, 10000);
  test('query all rows matching eventId of events_users in under 5s', (done) => {
    const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
    connection.query(queryAttendees, (error, results) => {
      connection.end();
      if (error) throw error;
      expect(results.length).toBe(6);
      done();
    });
  }, 5000);
});
