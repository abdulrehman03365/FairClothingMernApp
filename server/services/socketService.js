const {Server} = require('socket.io');

function initSocket(httpserver) {
  const io = new  Server(httpserver,{cors: {
    origin: "http://localhost:3000"
  }});

  io.on('connection', (socket) => {
    
    console.log(socket.handshake.auth.name + " is connected to socket server");

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('message', (message) => {
      console.log(`Received message: ${message}`);
    
    });

  

  });

  io.listen(9000)
}

module.exports = { initSocket };
