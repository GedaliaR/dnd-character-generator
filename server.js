let express = require('express');

let app = express();

app.use(express.static( __dirname + '/public'));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(8080, function() {
    console.log('Listening to port:  ' + 8080);
});