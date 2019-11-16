function Pig() {
	this.stomach = [];
}

Pig.prototype.eat = function(food) {
	this.stomach.push(food);
};