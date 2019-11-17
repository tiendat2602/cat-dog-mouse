function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.eat = function() {
	this.isDead = true;
};

Mouse.prototype.run = function() {
	console.log("running");
};

module.exports = Mouse;
