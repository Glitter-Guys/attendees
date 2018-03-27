require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../database/pg/pgQueries');

const app = express();
app.use(cors());
app.use('/event/:eventid/', express.static(path.join(__dirname, '/../client/dist')));

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

app.listen(8000, () => {
  console.log('listening on port 8000');
});
