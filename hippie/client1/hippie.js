let hippie = require('hippie');
hippie.assert.showDiff = true;

var firstReqUID;

function a() {
    hippie()
        .json()
        .base('http://localhost:8015')
        .get('/')
        .expectStatus(200)
        .expectHeader('Content-Type', 'application/json; charset=utf-8')
        .expectKey('requestId')
        .expectKey('demo')
        .end(function(err, res, body) {
            firstReqUID = body.requestId;
        });
}

function b() {
    hippie()
        .json()
        .base('http://localhost:8015')
        .get('/')
        .expectStatus(200)
        .expectHeader('Content-Type', 'application/json; charset=utf-8')
        .expectKey('demo')
        .expectValue('requestId', firstReqUID)
        .end(function(err, res, body) {
            if (err) throw err;
            process.exit(0);
        });
}
