/**
 * Created by aayusharora on 9/24/17.
 */
window.onload = function() {
  var distance = document.getElementById('distance');
  var waitingTime = document.getElementById('wt');
  var btn = document.getElementById('result');
  var result = document.getElementById('output');

  btn.onclick = function() {
      var distanceValue = distance.value;
      var waitingTimevalue = waitingTime.value;
      console.log(distanceValue);
      console.log(waitingTimevalue);
      result.innerHTML = parseInt(distanceValue) + parseInt(waitingTimevalue);
  }

};