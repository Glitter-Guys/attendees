CREATE DATABASE meetup;

USE meetup;

CREATE TABLE user (
  /* Describe your table here.*/

  id varchar,
  first varchar NOT NULL,
  last varchar NOT NULL,
  photoURL varchar
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE events (
  id	varchar,
  organizer varchar,
  PRIMARY KEY (id)
);
