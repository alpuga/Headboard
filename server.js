const express   = require('express');
let app = express();


const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const http      = require('http').Server(app);
const io        = require('socket.io')(http);

let port = process.env.PORT || 3000;


require('dotenv').config();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let Message = mongoose.model('Message', {
  name: String,
  message: String
});

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, (err, db) => {
  if (err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful Database Connection')
  }
});

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  })
});

app.route('/messages')
   .post((req, res) => {
     let message = new Message(req.body);
     message.save((err) => {
     if (err) {
       sendStatus(500);
     }
     io.emit('message', req.body);
     res.sendStatus(200);
  })
});

io.on('connection', (socket) => {
  console.log('a user connected')
});

let server = http.listen(port, () => {
  console.log('Server is running on port', server.address().port);
});
