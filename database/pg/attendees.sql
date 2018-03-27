DROP DATABASE IF EXISTS attendees;
CREATE DATABASE attendees;

\c attendees;

CREATE TABLE users
(
  PersonID INT,
  id VARCHAR(200),
  first VARCHAR(200),
  last VARCHAR(200),
  photoURL VARCHAR(200)
);
CREATE TABLE events_users
(
  event_id INT,
  user_id INT
);
