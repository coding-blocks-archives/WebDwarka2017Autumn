/**
 * Created by aayusharora on 10/29/17.
 */

const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/add', function(req,res) {
    let userData = req.body.user;
    db.actions.userData.fillTable(userData, function(err,data) {
        if (err) res.send(err);
        else {
            res.send(data);
        }
    })
});
app.listen(port, function (){
    console.log("Everything working on " + port);
    db.model.connectionStart();
});