/**
 * Created by aayusharora on 9/23/17.
 */

// IIFE - Immediately Invoked Function Expression

// (function(){
//     'use strict';

   // var onloa;
const pi = 3.14;
    function main() {
        var y = 3;
        console.log("I am here");
        function hello() {
            console.log("Hello");
        }
        // onloa = hello;

    }


    main();
    // onloa();


//
// })();

var x = 2;
function parent() {
    var x = 6;

    function child () {
        var x;
        function child2() {
          let x = 3;
        }

        child2();
        console.log(x);
    }
    child();
}
parent();


function hello() {
    var y;
    var x =3;
    if (x===3){
        let y = 5;
    }
    console.log(y);
}
hello();
pi = 3.21;