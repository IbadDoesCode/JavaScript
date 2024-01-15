// Adding a Unique Method to
// Array Prototype
var arr = ["LG", "HP", "MI", "HP", "NY"];
Array.prototype.unique = function () {
  var unique = [];
  for (i = 0; i < this.length; i++) {
    var current = this[i];
    if (unique.indexOf(current) < 0) unique.push(current);
  }
  return unique;
};

console.log(arr.unique());
