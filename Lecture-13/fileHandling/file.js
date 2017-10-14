/**
 * Created by aayusharora on 10/14/17.
 */
const file = require('fs');
const path = require('path');


console.log(path.join(__dirname, 'lib1.js' ))
file.readFile('./file1', function(err, data) {
    if (err) {
        return "No file"
    }

    console.log(data.toString());
});

file.writeFile('main.txt',"Hello World", (err) => {
    if(err) throw err;
    console.log("File is written")
})

