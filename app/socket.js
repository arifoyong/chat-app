// sockets.js
var socketio = require('socket.io');

// export module
module.exports = {
	socketServer: socketServer
};

function socketServer(app, server) {
  var io = socketio.listen(server);

  io.sockets.on('connection', function (socket) {
  	console.log('a user is connected');

  	socket.on('chat message', function(msg){
  		console.log('message: ' + msg);
  		io.emit('chat message', msg);
  	});

 

  });
};