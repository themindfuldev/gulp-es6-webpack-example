// zoo.js
var getBarkStyle = function(isHowler) {
  return isHowler? 'woooooow!': 'woof, woof!';
};

export class Dog {
  constructor(name, breed) {
  	this.name = name;
  	this.breed = breed;
  }

  bark() {
    return `${this.name}: ${getBarkStyle(this.breed === 'husky')}`;
  };
}

export class Wolf {
  constructor(name) {
  	this.name = name;
  }

  bark() {
    return `${this.name}: ${getBarkStyle(true)}`;
  };
}
