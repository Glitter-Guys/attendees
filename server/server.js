var express = require('express');
var app = express();


// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(__dirname + '/../client/dist'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});



app.get('/', (request, response) => {
	console.log('recieved get request');
})


