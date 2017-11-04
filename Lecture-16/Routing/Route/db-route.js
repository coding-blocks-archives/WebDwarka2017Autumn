/**
 * Created by aayusharora on 10/28/17.
 */
/**
 * Created by aayusharora on 10/28/17.
 */
var router = require('express').Router();
var db = require('../db/db');


router.get('/:id', function(req,res) {

    // A function from db file, to display item from db
     db.display(req.params.id,'*', function(data) {
         res.send(data);
     })
});

router.get('/price/:id', function(req,res) {
     // To display item price from database
    db.display(req.params.id,'price', function(data) {
        res.send(data);
    })

} );

module.exports = {
    router
};