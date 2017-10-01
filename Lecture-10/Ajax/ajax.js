/**
 * Created by aayusharora on 10/1/17.
 */

// https://api.darksky.net/forecast/c85ab82876d0ef90cf43d128797c91dc/37.8267,-122.4233

$(document).ready(function() {


    var summary = $('#summary');
    var cliendId = 'c85ab82876d0ef90cf43d128797c91dc';
    var endpoint = 'https://api.darksky.net/forecast/';
    var parameters = '/37.8267,-122.4233';
    var Data = [];
    var url = endpoint + cliendId + parameters;

    function AjaxRequest(url,callback) {
        $.ajax({ url: url,dataType: 'jsonp', success: function(data) {
            callback(data)
        }})
    }


   AjaxRequest(url, function(d) {
       Data.push(d);
       currentSummary(Data[0].currently)
   });

   function  currentSummary(cs) {
       var current  =  {
           time: cs.time,
           summary: cs.summary,
           icon: cs.icon,
           nearestStormDistance: cs.nearestStormDistance
       };
      console.log(current);
      summary.text(current.summary);
   }

});
