const bb = require('bluebird');
const fake = require('faker');

const options = {
  promiseLib: bb,
};
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://postgres:POSTGRESPASSWORD@ec2-18-219-208-33.us-east-2.compute.amazonaws.com:5432/attendees';
const db = pgp(connectionString);

const columnsEventsUsers = new pgp.helpers.ColumnSet(['event_id', 'user_id'], { table: 'events_users' });
const columnsUsers = new pgp.helpers.ColumnSet(['personid', 'id', 'first', 'last', 'photourl'], { table: 'users' });
const generateUserData = (startUser) => {
  const results = new Array(5000);
  for (let i = 0; i < 5000; i++) {
    results[i] = {
      personid: i + startUser,
      id: fake.internet.userName(),
      first: fake.name.firstName(),
      last: fake.name.lastName(),
      photourl: fake.image.avatar(),
    };
  }
  return results;
};
const generateEventData = () => {
  const results = new Array(5000);
  for (let i = 0; i < 5000; i++) {
    results[i] = {
      event_id: Math.floor(Math.random() * 10000000),
      user_id: Math.floor(Math.random() * 5000000),
    };
  }
  return results;
};
const insertAllUsers = (start) => {
  const query = pgp.helpers.insert(generateUserData(start), columnsUsers);
  db.none(query)
    .then(data => {
      if (start + 5000 < 5000000) {
        insertAllUsers(start + 5000);
      } else {
        console.log('done with users');
      }
    })
    .catch(error => {
      throw error;
    });
};
insertAllUsers(0);
const insertAllEvents = (start) => {
  const query = pgp.helpers.insert(generateEventData(), columnsEventsUsers);
  db.none(query)
    .then(() => {
      if (start + 5000 < 50000000) {
        insertAllEvents(start + 5000);
      } else {
        console.log('done with events');
      }
    })
    .catch(error => {
      throw error;
    });
};
// insertAllEvents(0);
