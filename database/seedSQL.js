const mysql = require('mysql');
const database = require('./seedDB10M');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'meetup',
  multipleStatements: true,
});

// database.insertBy100kEvents(500, connection, () => {
//   console.log('jobs done - 50M events_users');
  database.insertBy100k(50, connection, () => {
    console.log('jobs done - 5M users');
    connection.close();
  });
// });`
