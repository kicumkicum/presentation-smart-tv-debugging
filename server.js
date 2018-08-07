// Server
const http = require('http');

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log(parseLogs(request.url));
});

server.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
});

// Client

const URL = `http://localhost:${PORT}/`;

function log(message) {
  return fetch(`${URL}?log=${message}`);
}

log('hello');





function parseLogs() {}
