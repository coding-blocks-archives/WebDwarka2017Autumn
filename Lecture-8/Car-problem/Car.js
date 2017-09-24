/**
 * Created by aayusharora on 9/24/17.
 */
var car = {};
window.onload = function() {

  var distance = document.getElementById('distance');
  var waitingTime = document.getElementById('wt');
  var btn = document.getElementById('result');
  var result = document.getElementById('output');

  btn.onclick = function() {
      var distanceValue = parseInt(distance.value);
      var waitingTimevalue = parseInt(waitingTime.value);
      var totalPrice = car.calculateKm(distanceValue)+car.calculateTime(waitingTimevalue);
      display(totalPrice);
  };


  function display(price) {
      result.innerHTML = price;
  }
};