$(function () {
    $ul=$('#display');
    //ajax request to load data
    $.get('/getdata',function (data) {
        for (var i in data) {
            //showing data
            $ul.append(`<li><img src = ${data[i]}></li>`)

        }
    })

})
