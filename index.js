//Initialize the express 'app' object
let express = require("express");
const bodyParser = require("body-parser");
let app = express();

app.use("/", express.static("public"));
app.use(express.json({ limit: "10mb", extended: true }));

/*-----Database------*/
let datastore = require("nedb");
const { response } = require("express");
let db = new datastore("yearbook.db");
db.loadDatabase();

/*-----HTTP Server------*/
let http = require("http");
let server = http.createServer(app);

//'port' variable allowd for deployment
let port = process.env.PORT || 3002;

app.post("/saveGif", (req, res) => {
  const dbRecord = {
    type: 'gif',
    htmlId: req.body.id,
    dataUri: req.body.dataUri,
  };
  // TODO: handle invalid requests
  db.insert(dbRecord);
  res.send({ success: true, message: "gif saved" });
});

app.get("/getAllGifs", (req, res) => {
  console.log("getting all gifs");
  db.find({ type: 'gif' }, (error, docs) => {
    console.log("Error", error);
    // TODO: handle error
    const allGifs = { data: docs };
    res.json(allGifs);
  });
});

server.listen(port, () => {
  console.log("Server listening at port: " + port);
});

/*-----Sockets------*/
//Socket.io Code
//Initialize socket.io
let io = require("socket.io");
io = new io.Server(server);

const elementsDB = {};

//Listen for individual clients/users to connect
io.on("connection", (socket) => {
  console.log("We have a new client: " + socket.id);

  //Listen for messages from the client
  socket.on('place element', (params) => { // for testing/example purposes
    // elementsDB[params.id] = params;
    const dbRecord = {
      type: 'element',
      ...params,
    };
    db.insert(dbRecord);

    io.emit('show element', params);
    io.emit('all elements', elementsDB);
  });

  socket.on('get all elements', () => {
    db.find({ type: 'gif' }, (error, docs) => {
      if (error) {
        console.log("Error", error);
        return;
      }

      io.emit('all elements', docs);
    });
  })

  //Listen for this client to disconnect
  socket.on("disconnect", () => {
    console.log("A client has disconnected: " + socket.id);
  });
});

