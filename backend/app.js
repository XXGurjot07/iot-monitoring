const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

//CORS
const corsOptions = {
  origin: "http://localhost:3000",
    methods: 'PUT, POST, GET, DELETE, PATCH, OPTIONS', // Allowed methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', // Allowed headers
    credentials: true
};
app.use(cors(corsOptions));

//serial port
const {SerialPort} = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

//setting up socket
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: 'PUT, POST, GET, DELETE, PATCH, OPTIONS', // Allowed methods
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', // Allowed headers
    credentials: true
  }
});

// CHANGE PATH OVER HERE

const port = new SerialPort({
  path: '/dev/tty.SLAB_USBtoUART',
  baudRate: 115200,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false })

  io.on('connection', (socket) => {
    // console.log('a user connected');
  });

const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data', (data) => {
  io.emit('data', data);
  console.log(data);
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});

