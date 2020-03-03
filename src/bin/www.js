const http = require('http');
const app = require('../app');
const { PORT } = require('../keys');

const server = http.createServer(app);

app.set('port', PORT);

async function start() {
  await require('../config/db');

  server.listen(PORT, () => {
    console.log(`Server is running on port ${server.address().port}`);
  });
}

start();
