const app = require('./app')({
  srcFolder: '../build',
});
const server = require('http').createServer(app);

server.on('error', err => {
  console.log(err);
  process.exit(1);
});

server.on('listening', () => {
  console.log('server running on port %s', server.address().port);
});

process.on('SIGTERM', () => {
  console.log('Server shutting down.');
  server.close(err => {
    if (err) {
      console.log({ err }, 'Server failed to shut down');
      process.exit(1);
    }

    console.log('Server has shut down');
  });
});

// lets get this show on the road!
server.listen(3001);
