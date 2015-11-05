// main.js
import { Dog, Wolf } from './zoo';

var myDog = new Dog('Sherlock', 'beagle');
document.getElementById('content').innerHTML += myDog.bark();

var myWolf = new Wolf('Direwolf');
document.getElementById('content').innerHTML += `<br/>${myWolf.bark()}`;

document.getElementById('loadCat').addEventListener('click', e => {
	require.ensure([], () => {
		var Cat = require('./cat');

		var myCat = new Cat('Bugsy');
		document.getElementById('content').innerHTML += `<br/>${myCat.meow()}`;
	});
});