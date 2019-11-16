const chalk = require('chalk');

function Dog(name) {
	this.name = name;
}

Dog.prototype.sayHi = function() {
	console.log('hi i am a dog, my name is:'+chalk.blue(this.name));
}

module.exports = Dog;