/**
 * Created by aayusharora on 10/13/17.
 */
var express = require('express');
var app  = express();

var port = 5000 || process.env.PORT;
app.use(express.static('public'));


app.get('/student', function(req,res,next) {
    res.send("Student Is here");
    next();
});

app.use(function(req,res,next) {

    console.log(req)
});

app.listen(port, function(){
    console.log("Server is running on port " + port)
});