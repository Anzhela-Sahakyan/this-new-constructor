function Person(name, age) {
  this.name = name;
  this.age = age;

  return "You are right!!";
}
Person.prototype.compareAge = function compareAge(p2) {
  if (this.age > p2.age) {
    return `${p2.name} is younger than me`;
  } else if (this.age < p2.age) {
    return `${p2.name} is older than me`;
  }
  return `${p2.name} is the same age as me`;
};
const p1 = new Person("Samuel", 36);
const p2 = new Person("Joel", 3);
const comparison = p1.compareAge(p2);
console.log(comparison);
