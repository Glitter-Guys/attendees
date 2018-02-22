var express = require('express');
var app = express();


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(8000, function() {
  console.log('listening on port 8000');
});

