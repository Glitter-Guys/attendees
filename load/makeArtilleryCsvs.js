const fs = require('fs');

const entries = new Array(9000000)
for (let i = 0; i < 9000000; i += 1) {
  entries[i] = (i + 1000000).toString();
}
const data = entries.join('\n');
fs.writeFileSync('unpopular9Million.csv', data);
