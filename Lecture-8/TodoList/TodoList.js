/**
 * Created by aayusharora on 9/24/17.
 */
var taskArray = [];
window.onload = function() {
    var taskValue = document.getElementById('task');
    var btn = document.getElementById('add');
    var list = document.getElementById('list');

    btn.onclick = function() {
        var task = {
            "taskValue": taskValue.value,
            "done": false
        };

        taskArray.push(task);
        display();
    };

    function display() {
        var data ="";
        list.innerHTML = "";
        for(var i=0 ; i< taskArray.length; i++) {
            data += '<li id='+ i + ' onclick= "check(this)">' + taskArray[i].taskValue + '</li>';
        }
        list.innerHTML = data;
    }
};

function check(el) {
    console.log(el.id);
    el.style.textDecoration = 'line-through';

}