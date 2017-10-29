/**
 * Created by aayusharora on 10/29/17.
 */
const config = require('../config.json');
const Sequelize = require('sequelize');
const configUrl = `mysql://${config.USERNAME}:${config.PASSWORD}@${config.HOST}:3306/${config.DB}`;


const sequelize = new Sequelize(configUrl, {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

});


function connectionStart() {

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

}

// Schema => Model

let User = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        lastName: {
            type: Sequelize.STRING
        }
    }
);



module.exports = {
    connectionStart,
    User
}