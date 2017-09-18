/**
 * Created by aayusharora on 9/16/17.
 */
var x = [];
// undefined
x.push("hello");
// 1
// x
//     ["hello"]
x.push("World");
// 2
// x
// (2) ["hello", "World"]
x.push("Wink", "Getting");
// 4
// x
// (4) ["hello", "World", "Wink", "Getting"]
// x.length
// 4
// x[3]
// "Getting"
x.push(12);
// 5
// x
// (5) ["hello", "World", "Wink", "Getting", 12]
x.push(true);
// 6
// x
// (6) ["hello", "World", "Wink", "Getting", 12, true]