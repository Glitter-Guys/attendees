var data = require('./upcomingevents.js')
var request = require('request');
var eventIds = require('./seedEventIds.js');
var mysql      = require('mysql');
var async = require('async');


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'meetup',
  multipleStatements: true,
});

var pool  = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'meetup',
});

// connection.connect(function(err) {
// 	if (err) {
// 		console.log(err)
// 	}
//   console.log("Connected!");
// });


//get fake user seed data from api 
request('https://randomuser.me/api/?results=5', function (error, response, body) {	
	var results = JSON.parse(body)
	insertIntoDB(results.results, eventIds); 
});



// var insertIntoDB = function (data, eventIds) {
// 	for (var i = 0; i < data.length; i++) {

// 		//format user data 
// 		var user = {};
// 		user.id = data[i].login.username
// 		user.firstName = data[i].name.first
// 		user.lastName = data[i].name.last
// 		user.photoURL = data[i].picture.large

// 		connection.connect()
// 		// insert user into user table
// 		var userQueryString = "insert into Users(personId, id, first, last, photoURL) values" + 
// 		`('${i}', '${user.id}', '${user.firstName}', '${user.lastName}', '${user.photoURL}'')`;
// 		connection.query(userQueryString, (err) => {
// 			console.log(userQueryString);
// 		if (err) {
// 		        console.log('error: ' + err.message);
// 		      } else {
// 					console.log('User Saved')
// 					}
// 				})
 

// 		// insert events that user is attending into events_users table
// 		var randomNumberOfEvents = Math.floor(Math.random()*20)
// 		for (var j = 0; j < randomNumberOfEvents; j++) {
// 			var randomIndex = Math.floor(Math.random() * 107);
// 			var randomEventId = eventIds[randomIndex];
// 			var eventQueryString = "insert into Events_users(event_id, user_id) values" + 
// 				`('${randomEventId}', '${user.id}'')`;
// 			connection.query(eventQueryString, (err) => {
// 					if (err) {
// 		        console.trace('error: ' + err.message);
// 		      } else {
// 				console.log('User Events Saved')
// 				}
// 			})
// 		}
// 	}
// }



var insertIntoDB = function (data, EventIds) {
  	for (var i = 0; i < data.length; i++) {

		//format user data 
		var user = {};
		user.id = data[i].login.username
		user.firstName = data[i].name.first
		user.lastName = data[i].name.last
		user.photoURL = data[i].picture.large
	pool.getConnection(function (err, connection) {
	var userQueryString = "insert into Users(personId, id, first, last, photoURL) values" + 
		`('${i}', '${user.id}', '${user.firstName}', '${user.lastName}', '${user.photoURL}')`;
  	connection.query(userQueryString, function (error) {
    // And done with the connection.
    connection.release();

	    // Handle error after the release.
	    if (error) throw error;
	    console.log("saved")
	    // Don't use the connection here, it has been returned to the pool.
	  	});
  	})
  	}
};







