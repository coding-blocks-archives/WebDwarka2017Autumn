/**
 * Created by aayusharora on 11/5/17.
 */

const express = require('express');
const app = express();
const http = require('http');
const httpInstance = http.Server(app);

const socket = require('socket.io');
const io = socket(httpInstance);
let messages = [];

app.use(express.static('public'));

io.on('connect', function(socket) {
    socket.on('msg', function(data) {
        console.log(socket.id);
        messages.push({data: data, id: socket.id});
        socket.broadcast.emit('all', data);

    });
    io.emit('everybody', messages);
});
httpInstance.listen(5000, function() {
    console.log("Server is running ")
});




