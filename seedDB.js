var data = require('./upcomingevents.js')
var request = require('request');
var eventIds = require('./seedEventIds.js');
var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'meetup'
});

connection.connect(function(err) {
  console.log("Connected!");
});



//function to parse data for event ids from meetup api
// var getAllEventIds = function (data) {
// 	var eventIds = [];
// 	var parsedData = data
// 	for (var i = 0; i < parsedData.length; i++) {
// 		eventIds.push(parsedData[i].id);
// 		console.log(parsedData[i].id);
// 	}
// 	return eventIds;
// }

//get fake user seed data from api 
request('https://randomuser.me/api/?results=10', function (error, response, body) {	
	var results = JSON.parse(body)
  formatData(results.results, eventIds); 
  // console.log('requested')
});

var formatData = function (data, eventIds) {
	for (var i = 0; i < data.length; i++) {
		var user = {};
		user.id = data[i].login.username
		user.firstName = data[i].name.first
		user.lastName = data[i].name.last
		user.photoURL = data[i].picture.large
		user.events = []; 
		for (var j = 0; j < Math.floor(Math.random()*15); j++) {
			var randomIndex = Math.floor(Math.random()*107);
			if (user.events.indexOf(eventIds[randomIndex]) === -1) {
				user.events.push(eventIds[randomIndex])
			}
		}
		console.log(user)
	}
}

//mySQL schema






