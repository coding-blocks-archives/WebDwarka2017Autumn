/**
 * Created by aayusharora on 9/30/17.
 */

var a =20;

function parent() {

    var self = this;

    function main() {

        var self = this;
        var a = 10;
        console.log(self);
    }
    main()
}

parent();

