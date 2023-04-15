function Calculator() {
  this._checkingFunction = function (...nums) {
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] !== "number") {
        throw new Error("Please enter a number");
      }
    }
  };
  Calculator.prototype.add = function (...nums) {
    this._checkingFunction(...nums);
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  };
  Calculator.prototype.subtract = function (...nums) {
    this._checkingFunction(...nums);
    let difference = nums[0];
    for (let i = 1; i < nums.length; i++) {
      difference -= nums[i];
    }
    return difference;
  };
  Calculator.prototype.multiply = function (...nums) {
    this._checkingFunction(...nums);
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
      product *= nums[i];
    }
    return product;
  };
  Calculator.prototype.divide = function (...nums) {
    this._checkingFunction(...nums);
    let divident = nums[0];
    for (let i = 1; i < nums.length; i++) {
      divident /= nums[i];
    }
    return divident;
  };
}
const calc1 = new Calculator();
console.log(calc1.divide(10, 5));
