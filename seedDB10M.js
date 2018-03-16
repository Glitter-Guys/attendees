const mysql = require('mysql');
const fake = require('faker');
const data = require('./upcomingevents.js');

const generateFakeData = (length = 5000) => {
  const users = new Array(length);
  for (let i = 0; i < length; i += 1) {
    let user = [
      i,
      fake.internet.userName(),
      fake.name.firstName(),
      fake.name.lastName(),
      fake.image.avatar()
    ];
    users[i] = user;
  }
  return users;
}

const insertIntoDB = (connection, users, cb) => {
  let userQueryString = "INSERT INTO users(`personId`, `id`, `first`, `last`, `photoURL`) VALUES ?";
  connection.query(userQueryString, [users], function (error, result) {
    if (error) throw error;
    cb(result);
  });
};

const insertBy100k = (sets, connection, callback) => {
  let counter = 0;
  const recurse = (sets, connection, callback) => {
    counter += 1;
    const users = generateFakeData(100000);
    insertIntoDB(connection, users, (result) => {
      console.log(counter * 100000, ' rows added');
      if (sets > counter) {
        recurse(sets, connection, callback);
      } else {
        callback();
      }
    });
  };
  recurse(sets, connection, callback);
};

const generateFakeEventsData = (firstUserId, numberOfUsers, numberOfEvents) => {
  const results = new Array(numberOfUsers * numberOfEvents);
  for (let i = 0; i < numberOfUsers; i += 1) {
    for (let j = 0; j < numberOfEvents; j += 1) {
      const randEvent = Math.floor(Math.random() * 10000000);
      results[i * numberOfEvents + j] = [i + firstUserId, randEvent];
    }
  }
  return results;
}

const insertIntoEventsDB = (connection, eventsUsersData, cb) => {
  let userQueryString = "INSERT INTO events_users(`event_id`, `user_id`) VALUES ?";
  connection.query(userQueryString, [eventsUsersData], function (error, result) {
    if (error) throw error;
    cb(result);
  });
};

const insertBy100kEvents = (sets, connection, callback) => {
  let counter = 0;
  const recurse = (sets, connection, callback) => {
    const firstUserId = counter * 10000 + 1;
    counter += 1;
    const eventsUsersData = generateFakeEventsData(firstUserId, 10000, 10);
    insertIntoEventsDB(connection, eventsUsersData, (result) => {
      console.log(counter * 100000, ' rows added');
      if (sets > counter) {
        recurse(sets, connection, callback);
      } else {
        callback();
      }
    });
  };
  recurse(sets, connection, callback);
};

module.exports.generateFakeData = generateFakeData;
module.exports.insertIntoDB = insertIntoDB;
module.exports.insertBy100k = insertBy100k;
module.exports.generateFakeEventsData = generateFakeEventsData;
module.exports.insertIntoEventsDB = insertIntoEventsDB;
module.exports.insertBy100kEvents = insertBy100kEvents;
