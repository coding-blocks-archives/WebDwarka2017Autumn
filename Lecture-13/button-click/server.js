/**
 * Created by aayusharora on 10/14/17.
 */

var express = require('express');
var bodyParser = require('body-parser')
var port = 4000 || process.env.PORT;
var app = express();


app.listen(port, ()=> {
    console.log(`PORT is listening ${port}`)
});

app.use('/',express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json())

app.post('/addtask',function(req,res) {
    console.log(req.body);
    res.send("Successful")
});