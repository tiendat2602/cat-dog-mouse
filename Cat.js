var Mouse = require("./Mouse");

function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(animal) {
	if(animal instanceof Mouse) {
		this.stomach.push(mouse);
	} else {
		throw new Error("cat only can eat mouse");
	}
};

module.exports = Cat;