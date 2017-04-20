// modules ****************************//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// configuration **********************//

// db config
var db = require('./config/db');

// port config
var port = process.env.PORT || 8080;

// db connection
mongoose.connect(db.url);

// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

//set the static files location
app.use(express.static(__dirname + 'public'));


//routes *******************************//
//configure routes
require('./app/routes')(app);


//start app ****************************//
app.listen(port);
console.log("server listening on port " + port);

// export

exports = modules.exports = app;