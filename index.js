const Dog = require('./Dog');
const Cat = require('./Cat');
const Mouse = require('./Mouse');

const dog = new Dog("Lucy");
const cat = new Cat("Tom");
const mouse = new Mouse("Mickey");

try{
	cat.eat(dog);
} catch(error) {
	console.log(error.message);
}

console.log(cat);





