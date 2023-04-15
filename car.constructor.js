function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function fill(gallons) {
  this.tank += gallons;
  return this;
};
Car.prototype.drive = function drive(distance) {
  let checker = this.milesPerGallon * distance;
  if (checker < this.tank) {
    this.odometer += distance;
    this.tank = this.tank - checker;
    return "driving";
  }
  return `I ran out of fuel at ${this.odometer}`;
};
const car1 = new Car("BMW", 1);

console.log(car1.drive());
