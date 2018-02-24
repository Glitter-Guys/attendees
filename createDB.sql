CREATE DATABASE meetup;

USE meetup

CREATE TABLE Users (
	PersonID int,
	id varchar(200),
  first varchar(200),
  last varchar(200),
  photoURL varchar(200)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE Events (
	event_id int,
  id	varchar(200),
  organizer varchar(200)
);


CREATE TABLE Events_users (
	id int,
	event_id varchar(200),
	user_id varchar(200)
);



