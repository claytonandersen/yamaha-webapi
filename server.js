var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000

var routes = require('./routes/yamahaRoutes')
routes(app)

app.listen(port)

console.log('yamaha api started on port: ' + port)
