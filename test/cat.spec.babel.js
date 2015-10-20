import { expect } from 'chai';
import { Cat } from '../dist/cat';

describe('the cat module', () => {
	it('should instantiate a cat', () => {
		var dog = new Cat('Bugsy');
		expect(dog.meow()).to.equal('Bugsy: You gotta be kidding that I\'ll obey you, right?');
	});
});