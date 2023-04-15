function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function eat(...food) {
  if (food.length < 10) {
    this.stomach.push(...food);
    return this;
  }

  return "Your stomach is full.";
};
Person.prototype.poop = function poop() {
  this.stomach = [];
  return this;
};
Person.prototype.toString = function toString() {
  return `${this.name}, ${this.age}`;
};

const p1 = new Person("Mary", 50);
console.log(p1.toString());
