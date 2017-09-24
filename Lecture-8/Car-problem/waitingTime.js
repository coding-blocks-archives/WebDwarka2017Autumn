/**
 * Created by aayusharora on 9/24/17.
 */
(function() {
    function CalculateWaitingTime(time) {
        var t =0;
        t+= time<=15?0:(time>15 && time<=30)?(time-15)*15:(time>30)?(time-30)*25 + 225:"error";
        return t;
    }

    car.calculateTime = CalculateWaitingTime;

})();


