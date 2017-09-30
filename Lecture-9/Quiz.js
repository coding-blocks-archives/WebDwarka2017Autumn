/**
 * Created by aayusharora on 9/30/17.
 */

for( var i=0; i< 100; i++) {
    (function(i) {
        console.log("Hello" + i);
        setTimeout(function() {
            console.log(i);
        }, 2000)
    })(i)


}