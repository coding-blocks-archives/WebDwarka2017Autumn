/**
 * Created by aayusharora on 11/4/17.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userconfig = require('./userconfig.json');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({secret: 'cat is here'}));
app.use(passport.initialize());
app.use(passport.session());


app.post('/login',
    passport.authenticate('local',

        {
        successRedirect: '/success',
        failureRedirect: '/'
    }
    )
 );

passport.use(new localStrategy(

    function (username, password, done) {

        console.log(username);
        console.log(userconfig);
        if(username !== userconfig.username ) {

            return done(null, false, {message: "Username is not valid"});

        }

        if(password !== userconfig.password) {
            return done(null, false, {message: "Password is incorrect"});
        }

        return done(null, userconfig);
    }
));

passport.serializeUser(function(user, done) {
   return  done(null, user);
});

passport.deserializeUser(function(id, done) {
   return  done(null, id);
});


app.get('/', function(req,res) {
    res.send("Hello");
});

app.get('/success', function(req, res) {
    res.send(req.user);

});

app.listen(5000, function() {
    console.log("Server is running on Port 5000")
});
/**
 * Created by aayusharora on 11/4/17.
 */
/**
 * Created by aayusharora on 11/4/17.
 */
// var express = require('express');
// var passport = require('passport');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var session = require('express-session');
// var userconfig = require('./userconfig.json');
//
// var localStrategy = require('passport-local').Strategy;
// var app = express();
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());
// app.use(session({ secret: 'keyboard cat' }));
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.post('/login',
//     passport.authenticate('local', {
//         successRedirect: '/success',
//         failureRedirect: '/login'
//     })
//
// );
//
// passport.use(new localStrategy( function(username, password, done){
//
//     if(userconfig.username !== username) {
//         return done(null, false, {message: 'user failed'})
//     }
//     if(userconfig.password !== password) {
//         return done(null, false, {message: 'password failed'})
//     }
//
//     console.log(userconfig);
//     console.log(username);
//
//     return done(null,userconfig);
//
// }));
//
// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });
//
//
// app.get('/success', function(req,res) {
//     res.send("Login success")
// });
//
// app.listen(5000, function() {
//     console.log("Listen at 5000");
// });