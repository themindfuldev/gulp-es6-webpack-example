import { expect } from 'chai';
import Cat from '../target/cat';

describe('the cat module', () => {
	it('should instantiate a cat', () => {
		var cat = new Cat('Bugsy');
		expect(cat.meow()).to.equal('Bugsy: You gotta be kidding that I\'ll obey you, right?');
	});
});