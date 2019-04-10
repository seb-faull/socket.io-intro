const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
	console.log('New connection established');

	socket.emit('message-from-server', {
		greeting: 'Hello from Server'
	});

	socket.on('message-from-client', (msg) => {
		console.log(msg);
	});
});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
