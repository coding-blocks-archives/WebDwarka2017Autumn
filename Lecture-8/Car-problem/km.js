/**
 * Created by aayusharora on 9/24/17.
 */

(function() {
    function CalculatekmPrice(km) {
        var price =0;
        price+= km<=5?(km*20):(km<5 && km>=15)?(km-5)*40 + 5*20:(km>15)?(km-15)*100 + 500:"error";
        return price;
    }

    car.calculateKm = CalculatekmPrice;

})();

