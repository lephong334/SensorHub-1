// Modules dependencies
// ---------------------------
var express = require('express');
var http = require('http');
var path = require('path');

var auth   = require('./controllers/auth');
var alerts  = require('./controllers/alerts');
// var systems  = require('./controllers/systems');
var devices  = require('./controllers/devices');
var map     = require('./controllers/map');
var authMiddleware = require('./middleware/auth');
var documentation = require('./controllers/documentation');

const user = require("./controllers/profile");
var flash = require('connect-flash');


// var systemdetails = require('./controllers/systemdetails');


var app = express();

// set environments variables
// ---------------------------
var express = require('express');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var methodOverride = require('method-override');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var multer = require('multer');
// var errorHandler = require('errorhandler');


app.set('port', process.env.PORT || 443);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());         // get cookies from user agent and creates the req.cookies object
app.use(express.session({ secret : "2e0e1250-26bf-11e3-8224-0800200c9a66"})); // manage session and create a req.session object
app.use(express.methodOverride());
app.use(flash());
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components'))); // serve static resource
app.use(app.router);


// Define routes
// ---------------------------
app.all('*', authMiddleware.email_info);
app.get('/signin', auth.signin.get);
app.post('/signin', auth.signin.post);
app.post('/signout', auth.signout.post);

app.get('/', auth.check, function(req, res) {res.redirect('/devices');} );
app.get('/alerts',  auth.check, alerts.get);
app.post('/alerts',  auth.check, alerts.post);
app.get('/devices', auth.check, devices.get);

app.get('/map', auth.check, map.get);

app.post('/addDevice', auth.check, devices.add.post);
app.get('/deleteDevice/:id', auth.check, devices.delete);
app.get('/editDevice/:id', auth.check, devices.edit.get);
app.post('/editDevice', auth.check, devices.edit.post);

app.get('/documentation', auth.check, documentation.get);
// app.get('/map', auth.check, map.get);
// app.get('/systems/details', auth.check, systemdetails.get);

app.get('/profile', auth.check, user.get)

// app.get('/systems/details', auth.check, systemdetails.get);

const https = require('https');
const fs = require('fs');

// var options = {
//  key: fs.readFileSync('private.key'),
//  cert: fs.readFileSync('certificate.crt'),
//  ca: fs.readFileSync ('ca_bundle.crt')
// };
// var server = https.createServer(options, app).listen(443);

http.createServer(app).listen(8080, function(){
    console.log("server running")
})