var express = require('express');
var app = express();
var db = '../seedDB.js';


// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(__dirname + '/../client/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});



app.get('/api/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;
  console.log('recieved request', eventId )
  db.pool.getConnection(function (err, connection) {
      const eventQueryString = "SELECT * FROM Events_users FULL OUTER JOIN Users ON Events_users.user_id=Users.id WHERE Events_users.userid=" + eventId
      db.connection.query(eventQueryString, function (error, results) {
        // And done with the connection.
        db.connection.release();
        // Handle error after the release.
        res.send('response')
        if (error) throw error;
    });
  })
});
