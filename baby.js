function Person(name, age) {
  this.name = name;
  this.age = age;
}
const Baby = new Person("Aramanchik", 3);

Baby.favouriteToy = "Teddy";
Baby.play = function play() {
  return `Playing with ${this.favouriteToy}`;
};

console.log(Baby.play());
