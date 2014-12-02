var app = require('express')(),
    bodyParser = require('body-parser'),
    filter = require('./lib/filter');

app.use(bodyParser.json({limit: '1024kb'}));

// App
app.get('/', function (req, res) {
    res.json({"description": "Prepend - prepends the posted json array with the string supplied via prepend query param"});
});

app.post('/', function(req, res) {
    res.json(
        filter.prepend(
            req.body, 
            req.param('prepend')
        )
    );
});

// use env.PORT if set
var PORT = process.env.PORT || 8782;

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
