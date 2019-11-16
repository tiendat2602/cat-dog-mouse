const Dog = require('./Dog');
const Cat = require('./Cat');

const dog = new Dog("Lucy");
const cat = new Cat("Tom");

dog.sayHi();
dog.eat(cat);
console.log(dog);

