/**
 * Created by aayusharora on 10/1/17.
 */


function Character(shield, sword) {
    this.shield = shield;
    this.sword = sword;
    this.x = 300;
    this.y = 300;
}

Character.prototype.changeWeapon = function(shield) {
    this.shield = shield;
};
Character.prototype.display = function() {
    console.log(this.shield);
};

Character.prototype.changeCoordinate = function() {
    this.x = this.x - 5;
}

var wonderwoman = new Character("Axis-Shield", "Axis-Sword");
var spiderman = new Character("No-Shield", "No-Sword");

spiderman.changeWeapon('Web');
spiderman.display();