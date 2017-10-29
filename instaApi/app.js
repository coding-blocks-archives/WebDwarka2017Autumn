const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT||5000;
const clientId ='dbe3b7e852ba46cba3a19b06f8f5170f';
const clientSecret = 'e774e49a0bb04a2cb57c43e239a20855';
const request = require('request');
var accessToken = ''
var url = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=http://localhost:5000/handle&response_type=code`
var arr=[];

// request('https://www.google.com',function (err,response,body) {
//     console.log(err);
//     // console.log(response);
//     // console.log(body);
// })

//bodyparser middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'))

//route accessed by clicking button
app.get('/auth',(req,res) => {
    //redirecting the user to instagram
    res.redirect(url);
})


app.get('/handle',function (req,res) {
    //the code sent by instgram api
    var ccode = req.query.code;

    //post request to exchange the code for an access token
    request.post({
        url:'https://api.instagram.com/oauth/access_token',
        formData:{
        client_id:clientId,
        client_secret:clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:5000/handle',
        code:ccode,
    }},
        function optionalCallback(err,httpResponse,body){
            //setting accessToken to a global variable
            accessToken = JSON.parse(body).access_token;
            //redirect to a display route
            res.redirect('http://localhost:5000/display');
        }
    );

})

app.get('/display',function (req,res) {
    //check if access_token is available
    if(accessToken!=''){
        //requesting recent media of the user with a get request
        request(`https://api.instagram.com/v1/users/self/media/recent?access_token=${accessToken}`,function (err,response,body) {
            // console.log('inrequest');
            // console.log(body);
            data = JSON.parse(body).data;
            for(var i in data){
                //pushing the image urls to a arr
                    // console.log(data[i].images.standard_resolution.url);
                    arr.push(data[i].images.standard_resolution.url);
            }
            //redirect to display page
            res.redirect('display.html');
        })
    }
    else {
        //if access token not found redirect to auth to get accessToken
        res.redirect('/auth')
    }
})


// route that is accessed by display page to get data
app.get('/getdata',function (req,res,next) {
    if(arr===[]){
        //sending arr to front end
        // console.log(arr);
        res.send(arr);
    }
    else{
        // if arr not founnd redirect to home route
        res.redirect('/');
    }
})


app.listen(port,(err) => {
    console.log(url);
    if(err) throw err;
    console.log(`running on ${port}`);
});
