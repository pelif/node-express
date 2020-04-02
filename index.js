var express = require('express'); 
var http = require('http'); 
var routes = require('./routes'); 
var bodyParser = require('body-parser')
var path = require('path'); 

var app = express(); 

app.set('views', './views'); 
app.set('view engine', 'pug'); 

//Application middleware
app.use((req, res, next) => {
    req.name = "PELIF"
    console.log('I AM A SCUSTOM MIDDLEWARE'); 
    next();
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
})); 

app.use('/hello', routes); 

// app.get('/', function(req, res) {
//     res.send('Hello from express FElipe')
// }); 

app.get('/foo/bar', function(req, res) {
    res.json({
        message: `This is my foo/bar route By ${req.name}`
    })
}); 

app.get('/hello/world', function(req, res) {
    // res.json({
    //     messge: `This is my Hello World Route ${req.name}`
    // }); 
    res.render('index', {
        message: 'Hello World from express with PUG Template'
    }); 
}); 

app.use('/public', express.static(path.join(__dirname, 'public'))); 

// app.use((err, req, res, next) => {
//     res.status(500)
//        .json({
//             message: "Something wrong happens"
//         })
// }); 

http.createServer(app).listen(3000, function() {
    console.log("Express has been started with Success!")
}); 

// app.listen(3000, function() {
//     console.log("Express has been started")
// }); 