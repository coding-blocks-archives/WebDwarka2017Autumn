/**
 * Created by aayusharora on 10/28/17.
 */

/**
 * Created by aayusharora on 10/28/17.
 */
var router = require('express').Router();

router.get('/', function(req,res) {
    res.render('index', {key: [
        {item: "Mobile", price: "2000"},
        {item: "Tablet", price: "20000"},
        {item: "Desktop", price: "25500"}
    ]});
});

module.exports = {
    router

};