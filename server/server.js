const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
  .then(() => {
    const server = express();
    server.get('/event/:eventid/', (req, res) => {
      const actualPage = '/index';
      const queryParams = { eid: req.params.eventid };
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
  .catch(() => {
    process.exit(1);
  });
