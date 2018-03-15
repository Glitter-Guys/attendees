const request = require('request');
const mysql = require('mysql');
const fake = require('faker');
const data = require('./upcomingevents.js');

// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'meetup',
//   multipleStatements: true,
// });

// let pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'meetup',
// });

const generateFakeData = (length = 5000) => {
  let users = new Array(length);
  for (let i = 0; i < length; i++) {
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

const insertBy100k = (sets, pool, connection, callback) => {
  let counter = 0;
  const recurse = () => {
    counter += 1;
    const users = generateFakeData(100000);
    insertIntoDB(pool, connection, users, (result) => {
      console.log(counter * 100000, ' rows added');
      if (sets > counter) {
        recurse(sets, pool, connection, callback);
      } else {
        connection.release();
        callback();
      }
    });
  };
  recurse();
};

const generateFakeEventsData = (firstUserId, numberOfUsers, numberOfEvents) => {
  const results = new Array(numberOfUsers * numberOfEvents);
  for (let i = firstUserId; i < firstUserId + numberOfUsers; i += 1) {
    for (let j = 0; j < numberOfEvents; j += 1) {
      const randEvent = Math.floor(Math.random() * 10000000);
      results[(i - 1) * numberOfEvents + j] = [i, randEvent];
    }
  }
  return results;
}

// const insertIntoUsersEvents = function () {
//   const counter = 0;
//   const recurse = () => {
//     const firstUser = counter * 10000;
//     counter += 1;
//     const lastUser = counter * 10000;
//     const data = generateFakeEventsData (firstUser, lastUser);
//   }
//   const users = 
//   let eventsAttending = [];
//   //insert events that user is attending into events_users table
//   let randomNumberOfEvents = Math.floor(Math.random() * 40);
//   for (let j = 0; j < randomNumberOfEvents; j++) {
//     let randomIndex = Math.floor(Math.random() * 10000000);
//     //open pooling connection and insert query
//     pool.getConnection(function (err, connection) {
//       let eventQueryString = "insert into Events_users(event_id, user_id) values" +
//         `('${randomIndex}', '${user.id}')`;
//       connection.query(eventQueryString, function (error) {
//         // And done with the connection.
//         connection.release();
//         // Handle error after the release.
//         if (error) throw error;
//       });
//     });
//   }
// };

module.exports.generateFakeData = generateFakeData;
module.exports.insertIntoDB = insertIntoDB;
module.exports.insertBy100k = insertBy100k;
module.exports.generateFakeEventsData = generateFakeEventsData;
