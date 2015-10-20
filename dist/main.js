// main.js
'use strict';

var _zoo = require('./zoo');

var myDog = new _zoo.Dog('Sherlock', 'beagle');
console.log(myDog.bark()); // Sherlock: woof, woof!

var myWolf = new _zoo.Wolf('Werewolf');
console.log(myWolf.bark()); // Werewolf: woooooow!