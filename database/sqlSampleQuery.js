const mysql = require('mysql');

const start = Date.now();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'meetup',
  multipleStatements: true,
  connectTimeout: 20000,
});
const eventId = 2651975;
const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
connection.query(queryAttendees, (error, results) => {
  connection.end();
  if (error) throw error;
  console.log(results, 'got in', Date.now() - start, 'ms');
});
