// zoo.js
var getBarkStyle = function(isHowler) {
  return isHowler? 'woooooow!': 'woof, woof!';
};
export function Dog(name, breed) {
  this.bark = function() {
    return name + ': ' + getBarkStyle(breed === 'husky');
  };
}
export function Wolf(name) {
  this.bark = function() {
    return name + ': ' + getBarkStyle(true);
  };
}