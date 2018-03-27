const { clusterInsert } = require('./seedDBnoSQL');

const url = 'mongodb://localhost:27017';
const dbname = 'meetup';
const table = 'events_users';

clusterInsert(url, dbname, table, () => {
  console.log('hollaback girl', table);
});
