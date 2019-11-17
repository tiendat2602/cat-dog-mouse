function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.eat = function() {
	this.isDead = true;
}

Mouse.prototype.sleep = function() {
	console.log("sleeping");
};

module.exports = Mouse;
