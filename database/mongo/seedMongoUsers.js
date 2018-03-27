const { clusterInsert } = require('./seedDBnoSQL');

const url = 'mongodb://localhost:27017';
const dbname = 'meetup';
const table = 'users';

clusterInsert(url, dbname, table, (connection) => {
  console.log('hollaback girl', table);
  
});
