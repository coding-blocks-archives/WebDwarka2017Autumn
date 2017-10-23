/**
 * Created by aayusharora on 10/22/17.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db.js');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post('/add', function(req,res) {

   var Obj = req.body.Obj;
   Obj = JSON.parse(Obj);
   db.add(Obj['item'], Obj['price'], function() {
       db.display(function(data) {
           res.send(data);
       })
   })
});

app.post('/delete', function(req,res) {
    var id = req.body.id;
    db.delte(id, function() {
        db.display(function(data) {
            res.send(data);
        })
    })
});

app.listen('5000', function() {

    console.log("Server listening on 5000")
    db.connect();
});