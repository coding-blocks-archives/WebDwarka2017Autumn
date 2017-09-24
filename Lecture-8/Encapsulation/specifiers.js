/**
 * Created by aayusharora on 9/24/17.
 */
var global = {};
(function() {
   'use strict';

    function public1() {
        console.log("Publicly Available 1");
    }

    function public2() {
        console.log("Publicly Available 2");
    }

    function private1() {
        console.log("Privately Available 1");
    }

    function private2() {
        console.log("Privately Available 2");
    }


   var exposed = {
        "public1": public1,
        "public2": public2
   };

   global['getFunctions'] = exposed;

})();

console.log(global.getFunctions.public1());