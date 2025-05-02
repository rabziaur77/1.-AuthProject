/*import { io } from 'socket.io-client';

const SocketServer = "https://authproject-95w6.onrender.com";
const socket = io(SocketServer, {
    transports: ['websocket'],
    reconnectionAttempts: 5
});

// Log when connected and store your own socket ID
socket.on('connect', () => {
    console.log('Connected to server with socket ID:', socket.id);
});

// Optional: receive your socket ID explicitly from server
socket.on('your id', (id) => {
    console.log('Server-assigned socket ID:', id);
});

// Function to send a message to a specific socket ID
function sendToSpecificClient(toSocketId, msg) {
    console.log('Sending to:', toSocketId, 'Message:', msg);
    socket.emit('chat message', {
        toSocketId,
        msg
    });
}

// Optional: handle receiving a chat message
socket.on('chat message', ({ from, msg }) => {
    console.log(`Message from ${from}: ${msg}`);
});

export default sendToSpecificClient;
*/