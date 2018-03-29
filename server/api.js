const express = require('express')
const cors = require('cors');
const db = require('../database/pg/pgQueries');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/:eventid/attendees', (req, res) => {
  console.log('sending request to db');
  const eventId = `${req.params.eventid}`;
  db.getAttendees(eventId)
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      throw error;
    });
});
app.listen(9000, () => {
  console.log('ready on port 9000');
});
