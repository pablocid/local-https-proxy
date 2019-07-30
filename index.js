const fs = require('fs');
const https = require('https');
const express = require('express');
const proxy = require('express-http-proxy');
const app = express()

app.use('/', proxy('localhost:80'));

https.createServer({
    // key: fs.readFileSync('certs/ameba.com+4-key.pem'),
    // cert: fs.readFileSync('certs/ameba.com+4.pem')
    key: fs.readFileSync('certs/example.com+4-key.pem'),
    cert: fs.readFileSync('certs/example.com+4.pem')
  }, app).listen(443)