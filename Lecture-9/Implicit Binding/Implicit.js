/**
 * Created by aayusharora on 9/30/17.
 */


var a = {
    "foo": function () {
        console.log(this.bar);
    },
    "bar": "hello"
}

a.foo();