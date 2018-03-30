const express = require('express');
const db = require('../database/pg/pgQueries');
const cors = require('cors');

const app = express();
app.use(cors);

app.get('/', (req, res) => {
  console.log('you found the slash');
  res.send(200);
});

app.get('/api/:eventid/attendees', (req, res) => {
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
