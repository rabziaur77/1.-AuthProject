// /src/socket.js

const users = {};

function socketHandler(io) {
  io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);
    users[socket.id] = socket.id;
    console.log(users);
    socket.emit('your id', socket.id);

    socket.on('chat message', ({ toUserId, msg }) => {
      const toSocketId = users[toUserId];
      if (toSocketId) {
        console.log('Message:', msg);
        io.to(toUserId).emit('chat message', {
          from: socket.id,
          msg
        });
      }
    });

    socket.on('disconnect', () => {
      delete users[socket.id];
      console.log('User disconnected:', socket.id);
    });
  });
}

export default socketHandler;
