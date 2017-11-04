/**
 * Created by aayusharora on 10/28/17.
 */
/**
 * Created by aayusharora on 10/28/17.
 */

var router = require('express').Router();
var db = require('../db/db');

router.post('/:item', function(req,res) {
    let item = req.params.item.item;
    let price = req.params.item.price;
   // db file which add this item inside db
    db.add(item, price, function(data) {
        res.send(data);
    })
});


module.exports = {
    router
};