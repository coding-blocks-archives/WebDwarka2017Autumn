/**
 * Created by aayusharora on 9/23/17.
 */
//
// function printNumbers(max, next) {
//     for(var i =0; i< max; i++ ) {
//         console.log(i);
//     }
//     next();
// }
//
// function printHello() {
//     console.log("Print Hello");
// }
// printNumbers(1000, printHello);

function Clocktime(next) {
    setTimeout(function(){
        var data = ["Name", "Surname"];
        next(data[0], data[1]);
    },5000);
    console.log("Call me if something is async");
}

function Main(x,y) {
    console.log("Getting Started");
    var z = x + y;
    Clocktime(function (name, surname) {
        console.log("Z is ready now");
        console.log(z);
        console.log(name + " " + surname);
    })

}
Main(10,20);