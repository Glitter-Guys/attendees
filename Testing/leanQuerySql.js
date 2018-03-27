const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'meetup',
  connectionLimit: 1000,
});
let counter = 100;
const getRandEvents = (length) => {
  const randEvents = new Array(length);
  return randEvents.fill(0).map(() => {
    return Math.ceil(Math.random() * 10000000);
  });
};
const randEvents = getRandEvents(100);
const start = Date.now();
const cb = (error, results) => {
  if (error) throw error;
  counter -= 1;
  if (counter < 1) {
    console.log('Done at:', Date.now() - start, 'ms');
  }
};
for (let i = 0; i < counter; i += 1) {
  const eventId = randEvents[i];
  const queryAttendees = `SELECT * FROM events_users WHERE event_id = '${eventId}'`;
  pool.query(queryAttendees, cb);
}
