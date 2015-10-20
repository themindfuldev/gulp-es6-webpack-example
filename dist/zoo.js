// zoo.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Dog = Dog;
exports.Wolf = Wolf;
var getBarkStyle = function getBarkStyle(isHowler) {
  return isHowler ? 'woooooow!' : 'woof, woof!';
};

function Dog(name, breed) {
  this.bark = function () {
    return name + ': ' + getBarkStyle(breed === 'husky');
  };
}

function Wolf(name) {
  this.bark = function () {
    return name + ': ' + getBarkStyle(true);
  };
}