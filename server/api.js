const express = require('express');
const db = require('../database/pg/pgQueries');

const app = express();


app.get('/', (req, res) => {
  console.log('you found the slash');
  res.send(200);
});

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

app.listen(8000, (err) => {
  if (err) throw err;
  console.log('ready on port 8000');
});
