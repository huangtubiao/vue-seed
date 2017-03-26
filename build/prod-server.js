var config = require('../config');

var opn = require('opn');
var path = require('path');
var express = require('express');

var port = process.env.PORT || config.dev.port;

var app = express();

app.use(express.static('./dist'));

var uri = 'http://qftest.56.com:' + port;

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return
    }

    opn(uri)
});
