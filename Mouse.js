function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.eat = function() {
	this.isDead = true;
}

module.exports = Mouse;
