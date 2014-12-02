var app = require('express')(),
    bodyParser = require('body-parser'),
    filter = require('./lib/filter');

app.use(bodyParser.text({type : 'text/*', limit: '1024kb'}));
app.use(bodyParser.text({type : 'application/xml'}));

// use env.PORT if set
var PORT = 8782;

// App
app.get('/', function (req, res) {
    res.json({"description":"Prepend - prepends the posted json array with the string supplied via prepend query param"});
});

app.post('/', function(req, res) {
    var result = filter.prepend(req.body, req.param('prepend'));

    // respond with json array of 0+ items
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
