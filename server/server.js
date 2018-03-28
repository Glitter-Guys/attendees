require('newrelic');
const express = require('express');
const next = require('next');
// const cors = require('cors');
// const path = require('path');
// const db = require('../database/pg/pgQueries');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
  .then(() => {
    const server = express();
    server.get('/event/:eventid/', (req, res) => {
      const actualPage = '/';
      console.log(req.params.id);
      const queryParams = { eid: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(3009, (err) => {
      if (err) throw err;
      console.log('ready on http://localhost:3009');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });



// app.use(cors());
// app.use('/event/:eventid/', express.static(path.join(__dirname, '/../client/dist')));

// app.get('/api/:eventid/attendees', (req, res) => {
//   const eventId = `${req.params.eventid}`;
//   db.getAttendees(eventId)
//     .then((results) => {
//       res.send(results);
//     })
//     .catch((error) => {
//       throw error;
//     });
// });

// app.listen(8000, () => {
//   console.log('listening on port 8000');
// });
