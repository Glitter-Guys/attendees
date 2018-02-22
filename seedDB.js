var data = require('./100UpcomingEvents.js')
//seed data base file
var getAllEventIds = function (data) {
	var eventIds = [];
	var parsedData = data
	for (var i = 0; i < parsedData.length; i++) {
		eventIds.push(parsedData[i].id);
		console.log(parsedData[i].id);
	}
	return eventIds;
}

getAllEventIds(data);

