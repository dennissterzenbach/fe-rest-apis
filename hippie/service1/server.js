// REST-SERVER: LOAD DEPENDENCIES
var cors = require('cors');
var express = require('express');
var app = express();
const portToListen = 8015;

// REST-SERVER: SETUP SECURITY
app.use(cors());

// REST-SERVER: SETUP ROUTE
app.get('/', function (req, res) {
    let responseData = {};

    responseData.requestHeaders = req.headers;
    responseData.demo = '123';
    responseData.requestId = Math.floor(Math.random() * 100);
  
    let responseOutput;
    responseOutput = responseData;

    // responseOutput = JSON.stringify(responseData);

    res.status(200).json(responseOutput);
});

// REST SERVER: STARTUP
app.listen(portToListen, function () {
  console.log('Awesome DEMO REST Server listening on port ' + portToListen + '!');
});
