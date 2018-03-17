USE meetup;
CREATE TABLE users (
	PersonID INT AUTO_INCREMENT PRIMARY KEY,
	id VARCHAR(200),
  first VARCHAR(200),
  last VARCHAR(200),
  photoURL VARCHAR(200)
);
CREATE TABLE events_users (
	event_id INT, 
	user_id INT,
  INDEX(event_id)
);
