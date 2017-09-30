/**
 * Created by aayusharora on 9/30/17.
 */

var a = {
  "foo": function (a,b) {
    console.log(this.token,a,b);
  },
   "token": "1"
};

var b = {
    "foo": function () {
        console.log(this.token);
    },
    "token": "2"
};

a.foo.call(b,1,2);