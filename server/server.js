const express = require('express');
const app = express();
const db = require('../seedDB.js');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path')
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(8000, function() {
  console.log('listening on port 8000');
});

let connection = mysql.createConnection({
  host     : 'sqldb',
  user     : 'root',
  password : '',
  database : 'meetup',
  multipleStatements: true,
});

let pool  = mysql.createPool({
  host     : 'sqldb',
  user     : 'root',
  password : '',
  database : 'meetup',
});



app.use(cors())
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/event/:eventid/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;

  //get Users from database by eventId
  db.pool.getConnection(function (err, connection) {
      const eventQueryString = "SELECT * FROM Events_users RIGHT JOIN Users ON Events_users.user_id=Users.id WHERE Events_users.event_id = " + '"' + eventId + '"'
      connection.query(eventQueryString, function (error, results) {
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        res.send(results)
        if (error) throw error;
    });
  })
});

app.get('/api/:eventid/attendees', (req, res) => {
  const eventId = `${req.params.eventid}`;
  console.log('attendees requested', eventId);


  //get Users from database by eventId
  pool.getConnection(function (err, connection) {
      const eventQueryString = "SELECT * FROM Events_users RIGHT JOIN Users ON Events_users.user_id=Users.id WHERE Events_users.event_id = " + '"' + eventId + '"'
      connection.query(eventQueryString, function (error, results) {
        // And done with the connection.
        connection.release();
        // Handle error after the release.
        res.send(results)
        if (error) throw error;
    });
  });
});







