//Initialize the express 'app' object
let express = require("express");
let app = express();

app.use("/", express.static("public"));

//Initialize the actual HTTP server
let http = require("http");
let server = http.createServer(app);

//'port' variable allowd for deployment
let port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log("Server listening at port: " + port);
});

//Socket.io Code
//Initialize socket.io
let io = require("socket.io");
io = new io.Server(server);

//Listen for individual clients/users to connect
io.on("connection", (socket) => {
  console.log("We have a new client: " + socket.id);

  //Listen for messages from the client
  socket.on('chat message', (msg) => { // for testing/example purposes
    console.log('message: ' + msg);
    io.emit('chat message', msg);

  });

  //Listen for this client to disconnect
  socket.on("disconnect", () => {
    console.log("A client has disconnected: " + socket.id);
  });
});

