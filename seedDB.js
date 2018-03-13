let data = require('./upcomingevents.js')
let request = require('request');
let eventIds = require('./seedEventIds.js');
let mysql      = require('mysql');


let connection = mysql.createConnection({
  host     : 'sqldb',
  user     : 'root',
  password : '',
  database : 'meetup',
  multipleStatements: true,
});

let pool  = mysql.createPool({
  host     : 'sqldb',
  user     : 'root',
  password : '',
  database : 'meetup',
});



//get fake user seed data from api 
let getDataFromAPI = function (callback) {
	request('https://randomuser.me/api/?results=50', function (error, response, body) {	
		var parsedBody = JSON.parse(body)
		callback(parsedBody.results, eventIds); 
	});
}





let insertIntoDB = function (data, EventIds) {
		let currentUser; 
		let users = [];
		let count = 0;
  	for (let i = 0; i < 50; i++) {

			//format user data 
			let user = {};
			user.id = data[i].login.username
			user.firstName = data[i].name.first
			user.lastName = data[i].name.last
			user.photoURL = data[i].picture.large
			
			//check for duplicats
			if (users.indexOf(user.id) === -1) {
				users.push(user.id)
				//Open pooling connection and insert query	
				pool.getConnection(function (err, connection) {
				let userQueryString = "insert into Users(personId, id, first, last, photoURL) values" + 
					`('${i}', '${user.id}', '${user.firstName}', '${user.lastName}', '${user.photoURL}')`;
			  	connection.query(userQueryString, function (error) {
				    // And done with the connection.
				    connection.release();
				    // Handle error after the release.
				    if (error)  console.log(error);
				    // Don't use the connection here, it has been returned to the pool.
				  	});
		  	})
			}

			let eventsAttending = [];
	  	//insert events that user is attending into events_users table
	  	let randomNumberOfEvents = Math.floor(Math.random()*40)
				for (let j = 0; j < randomNumberOfEvents; j++) {
					let randomIndex = Math.floor(Math.random() * 107);
					let randomEventId = eventIds[randomIndex];
					if (eventsAttending.indexOf(randomEventId) === -1) {
					//open pooling connection and insert query
					pool.getConnection(function (err, connection) {
						let eventQueryString = "insert into Events_users(event_id, user_id) values" + 
						`('${randomEventId}', '${user.id}')`;
				  	connection.query(eventQueryString, function (error) {
					    // And done with the connection.
					    connection.release();
					    // Handle error after the release.
			  	});
				})
			}
		}
	}
	// connection.end();
};





getDataFromAPI(insertIntoDB)

setTimeout(function () {
	pool.end()
	console.log('connection terminated')
}, 10000)

// module.exports.getDataFromAPI = getDataFromAPI;
// module.exports.insertIntoDB = insertIntoDB;
module.exports.pool = pool;
module.exports.connection = connection;





