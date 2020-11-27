
let express = require('express');


let app = express();


app.get('/home', function(req, res){

    res.send("Welcome to Homepage");

});
app.listen(3000);