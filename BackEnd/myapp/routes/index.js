const express = require('express');
const router = express.Router();

const path = require('path');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const pg = require('pg');//db
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
/* GET home page. */
clients = [
  {
    id: 1,
    first_name: "hui",
    last_name: "sobaka",
    domain: "loh",
    email: "pidor@gmail.com",
    password: "freshcode-gavno",
    username: "umor",
    last: "nikogda"
  },
  {
    id: 2,
    first_name: "pipirka",
    last_name: "sobaka",
    domain: "aloh",
    email: "pidor@gmail.com",
    password: "freshcode-gavno",
    username: "umor",
    last: "nikogda"
  }
]
router.get('/api/', function(req, res, next) {
  res.send(clients)
  
});


router.post('/api/', function(req, res, next) {
  var test = {
    id: "2",
    name: req.body.aaa
  };
  res.send(test)
});


router.put('/api/:id', function(req, res){//update data
  var artist = artists.find(function(artist){
    return artist.id === Number(req.params.id)
  });
  artist.name=req.body.name;
  res.send(artist);
});

router.delete('/api/:id', function(req, res){
  artists = artists.filter(function(artist){
    return artist.id != Number(reqq.params.id);
  });
  res.sendStatus(200)//send status
});
module.exports = router;

