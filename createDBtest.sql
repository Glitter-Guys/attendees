USE meetuptest;
CREATE TABLE Users (
	PersonID int,
	id varchar(200),
  first varchar(200),
  last varchar(200),
  photoURL varchar(200)
);
CREATE TABLE Events (
	event_id int,
  id	varchar(200),
  organizer varchar(200)
);
CREATE TABLE Events_users (
	event_id varchar(200),
	user_id varchar(200)
);
