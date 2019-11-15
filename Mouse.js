function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.prototype.dead = function() {
	this.dead = true;
}

module.exports = Mouse;
