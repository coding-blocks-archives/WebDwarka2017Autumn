/**
 * Created by aayusharora on 10/28/17.
 */
var router = require('express').Router();

var shopping = [
    {"item": "Mobile", "price": "5000"},
    {"item": "Desktop", "price": "50000"},
    {"item": "Tablet", "price": "15000"}
];

router.get('/:id', function(req,res) {
    res.send(shopping[req.params.id]);
});

router.get('/price/:id', function(req,res) {
    res.send(shopping[req.params.id].price);
} );

module.exports = {
    router,
    shopping

};