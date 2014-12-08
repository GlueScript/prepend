var app = require('express')(),
    winston = require('winston'),
    bodyParser = require('body-parser'),
    filter = require('./lib/filter');

/*
* Get winston to log uncaught exceptions and to not exit
*/
var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true
    })
  ],
  exitOnError: false
});

app.use(bodyParser.json({limit: '1024kb'}));
app.use(bodyParser.text({type: 'text/*', limit: '1024kb'}));

app.get('/', function (req, res) {
    res.json({"description": "Prepend - prepends the posted json array with the string supplied via prepend query param"});
});

app.post('/', function(req, res) {
    console.log(req.body);
    filter.prepend(req.body, req.param('prepend'), function (result) {
        res.json(result);
    });
});

var PORT = process.env.PORT || 80;
app.listen(PORT);
logger.log('Running on http://localhost:' + PORT);
