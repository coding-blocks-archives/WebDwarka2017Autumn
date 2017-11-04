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
}

function display(id,query,callback) {

    connection.query(`Select ${query} FROM shoppinglist where id= ${id} `, function(err,data) {

        callback(data);
    });
}


function add(item, price, callback) {
    console.log(item, price);
    connection.query(`insert into shoppinglist (item,price) values ('${item}', '${price}')`, function(err, data) {
        callback(data);
    })
}


module.exports = {
    connect: Connect,
    display: display,
    add: add
};