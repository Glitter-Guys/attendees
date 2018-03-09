const express = require('express');
const app = express();
const db = require('../seedDB.js');
const cors = require('cors');
const mysql = require('mysql');
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});


app.get('/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;

let connection = mysql.createConnection({
  host     : 'database',
  user     : 'root',
  password : '',
  database : 'meetup',
  multipleStatements: true,
});

let pool  = mysql.createPool({
  host     : 'database',
  user     : 'root',
  password : '',
  database : 'meetup',
});

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
  })
});


