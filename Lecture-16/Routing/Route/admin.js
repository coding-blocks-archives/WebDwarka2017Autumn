/**
 * Created by aayusharora on 10/28/17.
 */

var router = require('express').Router();
var shoppingArray = require('./route').shopping;

router.post('/:item', function(req,res) {

    shoppingArray.push(JSON.parse(req.params.item));
    res.send(shoppingArray);
});


module.exports = {
    router
};