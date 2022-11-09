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

server.listen(port, () => {
  console.log("Server listening at port: " + port);
});

/*-----Sockets------*/
//Socket.io Code
//Initialize socket.io
let io = require("socket.io");
io = new io.Server(server);

//Listen for individual clients/users to connect
io.on("connection", (socket) => {
  console.log("We have a new client: " + socket.id);

  socket.on('create element', (params) => {
    db.find({ id: params.id }, (error, docs) => {
      if (docs.length < 1) {
        console.log('inserted:', docs);
        const dbRecord = {
          type: 'element',
          ...params,
        };
        db.insert(dbRecord);
      }
    });
  });

  socket.on('place element', params => {
    io.emit('show element', params);
  });

  socket.on('update element', (params) => {
    const dbRecord = {
      type: 'element',
      ...params,
    };
    db.update({ id: params.id }, { ...dbRecord }, {}, (error, docs) => {
      console.log('updated:', dbRecord);
    });
  });

  socket.on('get all elements', () => {
    db.find({ type: 'element' }, (error, docs) => {
      if (error) {
        console.log("Error", error);
        return;
      }

      io.emit('all elements', docs);
    });
  })

  socket.on("get all gifs", () => {
    db.find({type: "gif"}, (error, docs) => {
      if (error) {
        console.log("Error", error);
        return;
      }

      io.emit('all gifs', docs);
    })
  })

  //Listen for this client to disconnect
  socket.on("disconnect", () => {
    console.log("A client has disconnected: " + socket.id);
  });
});

