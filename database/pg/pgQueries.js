const bb = require('bluebird');

const options = {
  promiseLib: bb,
};
const pgp = require('pg-promise')(options);

const connectionString = 'postgres://postgres:ackbar@localhost:5432/attendees';
const db = pgp(connectionString);

const getAttendees = (eventId) => {
  return db.any('SELECT (first, last, photourl) FROM events_users JOIN users ON users.personid=events_users.user_id WHERE events_users.event_id = $1', eventId);
};

module.exports.getAttendees = getAttendees;
