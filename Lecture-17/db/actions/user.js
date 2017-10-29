/**
 * Created by aayusharora on 10/29/17.
 */

const model = require('../model');


function fillTable(userData, callback) {
    model.User.sync({force: true}).then(function () {
        // Table created
        return model.User.create({
            firstName: userData.firstName,
            lastName: userData.lastName
        }).then((data)=> {
              callback(null,data);
        }).catch((err)=> {
              callback(err);
        });
    });
}

module.exports = {
    fillTable
}