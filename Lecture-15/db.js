/**
 * Created by aayusharora on 10/22/17.
 */


var mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'aayush',
    password: '1234',
    database: 'tasks'
};


var connection = mysql.createConnection(config);

function Connect() {
    connection.connect();
    // update(function() {
    //     delte(function() {
    //         display(function() {
    //             connection.end();
    //         })
    //     })
    //
    // });

}

function display(callback) {
    connection.query('Select * FROM shoppinglist', function(err,data) {

        callback(data);
    });
}

function delte(id,callback) {
    connection.query(`delete from shoppinglist where id =${id}`, function(err, data) {
         callback();
    })
}
function update (callback) {
    connection.query(`update shoppinglist set price='80' where id =1`, function(err, data) {
        callback();
    })
}

function add(item, price, callback) {
    console.log(item, price);
    connection.query(`insert into shoppinglist (item,price) values ('${item}', '${price}')`, function(err, data) {
        callback();
    })
}


module.exports = {
    connect: Connect,
    update: update,
    delte: delte,
    display: display,
    add: add
};
