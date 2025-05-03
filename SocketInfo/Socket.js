// /src/socket.js

import { secret } from "../TokenAuth/Tokenization.js";

const users = {};

function socketHandler(io) {

  io.use((socket, next)=>{
    const token = socket.handshake.auth.token;
    if (token) {
      try {
        const decoded = jwt.verify(token, secret); // Replace with your secret
        socket.user = decoded; // Store user info in socket
        next();
      } catch (err) {
        next(new Error('Authentication error'));
      }
    } else {
      next(new Error('Authentication required'));
    }
  })

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
