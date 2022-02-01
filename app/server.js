var express = require('express');
var app = express()

app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(8000, function() {
    console.log('load Success!');
});

