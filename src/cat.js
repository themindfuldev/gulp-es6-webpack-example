// cat.js
export function Cat(name) {
  this.meow = function() {
    return name + ': You gotta be kidding that I\'ll obey you, right?';
  };
}
