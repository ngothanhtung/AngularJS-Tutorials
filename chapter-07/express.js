var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/home', function (req, res) {
    res.send('home');
});

app.get('/about', function (req, res) {
    res.send('about');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});