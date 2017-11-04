/**
 * Created by aayusharora on 10/28/17.
 */


const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var db = require('./db/db');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
// app.get('/:id', function(req,res) {
//    res.send(req.params.id);
// })
const routes = {
   paths: require('./Route/db-route').router,
   admin: require('./Route/admin-route').router,
   templates: require('./Route/template-route').router
};


app.use('/shopping', routes.paths);
app.use('/admin', routes.admin);
app.use('/templates', routes.templates);

app.listen(5000, function() {
    console.log("Running on 5000");
    db.connect();
});
