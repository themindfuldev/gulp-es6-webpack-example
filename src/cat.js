// cat.js
export default class Cat {
  constructor(name) {
  	this.name = name;
  }

  meow() {
    return `${this.name}: You gotta be kidding that I'll obey you, right?`;
  }
}
