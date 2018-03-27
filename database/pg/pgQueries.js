const bb = require('bluebird');

const options = {
  promiseLib: bb,
};
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://postgres:ackbar@localhost:5432/attendees';
const db = pgp(connectionString);

const getUser = (userId) => {
  db.one('SELECT  * FROM users WHERE PersonID = $1', userId)
    .then((data) => {
      console.log(data);
    });
};
const getEvent = (eventId) => {
  db.any('SELECT * FROM events_users WHERE event_id = $1', eventId)
    .then((data) => {
      console.log(data);
    });
};
const getAttendees = (eventId) => {
  db.any('SELECT * FROM events_users RIGHT JOIN users ON users.PersonID=events_users.user_id WHERE events_users.event_id = $1', eventId)
    .then((data) => {
      console.log(data);
    });
};

getEvent(500);
// getAttendees(500);

// module.exports.addUser = addUser;
// module.exports.addEvent = addEvent;
module.exports.getUser = getUser;
module.exports.getEvent = getEvent;
module.exports.getAttendees = getAttendees;
