const express = require('express');
const db = require('../database/pg/pgQueries');
const cors = require('cors');

const app = express();
app.use(cors);

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

app.listen(3010, (err) => {
  if (err) throw err;
  console.log('ready on port 3010');
});
