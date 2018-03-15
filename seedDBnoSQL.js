const MongoClient = require('mongodb').MongoClient;
const seedDB = require('./seedDB10M.js');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  console.log("Connected successfully to server");
  const db = client.db('users');
  
  client.close();
});