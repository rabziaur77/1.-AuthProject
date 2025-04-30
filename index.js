import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'
import bodyParser from 'body-parser'
import router from './Routing.js';
import socketHandler from './SocketInfo/Socket.js'

const app = express()
const PORT = 8080;

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: '*',  // Allow all origins
      methods: ['GET', 'POST']
    }
  });

socketHandler(io)

// middleware
app.use(bodyParser.json());

// routing
app.use('/api', router);

/*
server.listen(PORT, ()=>{
    console.log(`Server is started on ${PORT}`);
})
*/
export default app;
