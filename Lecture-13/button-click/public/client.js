$('button').click(function(){

    var data = {
        task: "task"
    };

    $.post({
        url:'/addtask',
        data,
        function(d,status) {
            console.log(d + status)
        }
    });

});