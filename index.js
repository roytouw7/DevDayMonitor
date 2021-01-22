const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('connected');   
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
        console.log(msg)
        System.out.println(msg);
    });
});

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});