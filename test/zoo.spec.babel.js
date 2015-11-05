import { expect } from 'chai';
import { Dog, Wolf } from '../target/zoo';

describe('the zoo module', () => {
	it('should instantiate a regular dog', () => {
		var dog = new Dog('Sherlock', 'beagle');
		expect(dog.bark()).to.equal('Sherlock: woof, woof!');
	});

	it('should instantiate a husky dog', () => {
		var dog = new Dog('Whisky', 'husky');
		expect(dog.bark()).to.equal('Whisky: woooooow!');
	});

	it('should instantiate a wolf', () => {
		var wolf = new Wolf('Direwolf');
		expect(wolf.bark()).to.equal('Direwolf: woooooow!');
	});
});