let data = require('./upcomingevents.js')
let request = require('request');
let eventIds = require('./seedEventIds.js');
let mysql      = require('mysql');


let connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'meetup',
  multipleStatements: true,
});

let pool  = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'meetup',
});




//get fake user seed data from api 
var getDataFromAPI = function () {
	request('https://randomuser.me/api/?results=50', function (error, response, body) {	
		var results = JSON.parse(body)
		insertIntoDB(results.results, eventIds); 
	});
}





let insertIntoDB = function (data, EventIds) {
		let currentUser; 
  	for (let i = 0; i < 50; i++) {

			//format user data 
			let user = {};
			user.id = data[i].login.username
			user.firstName = data[i].name.first
			user.lastName = data[i].name.last
			user.photoURL = data[i].picture.large


			//Open pooling connection and insert query	
			pool.getConnection(function (err, connection) {
			let userQueryString = "insert into Users(personId, id, first, last, photoURL) values" + 
				`('${i}', '${user.id}', '${user.firstName}', '${user.lastName}', '${user.photoURL}')`;
		  	connection.query(userQueryString, function (error) {
			    // And done with the connection.
			    connection.release();
			    // Handle error after the release.
			    if (error) throw error;
			    // Don't use the connection here, it has been returned to the pool.
			  	});
	  	})


	  	//insert events that user is attending into events_users table
	  	let randomNumberOfEvents = Math.floor(Math.random()*20)
			for (let j = 0; j < randomNumberOfEvents; j++) {

				//open pooling connection and insert query
				pool.getConnection(function (err, connection) {
				let randomIndex = Math.floor(Math.random() * 107);
				let randomEventId = eventIds[randomIndex];
				let eventQueryString = "insert into Events_users(event_id, user_id) values" + 
				`('${randomEventId}', '${user.id}')`;
		  	connection.query(eventQueryString, function (error) {
			    // And done with the connection.
			    connection.release();
			    // Handle error after the release.
			    if (error) throw error;
			  	});
			})
		}
	}
};




connection.end();


