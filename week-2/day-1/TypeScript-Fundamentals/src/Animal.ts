class Animal{
  makeSound(): string{
    return 'Something';
  }
}

class Dog extends Animal{
  makeSound(): string {
    return 'Woff woff';
  }
}

class Cat extends Animal {
  makeSound(): string {
    return 'Meow meow';
  }
}

function playSound(animal: Animal) {
  console.log(animal.makeSound());
}

const dog = new Dog();
const cat = new Cat();
const genericAnimal = new Animal();

playSound(dog);
playSound(cat);
playSound(genericAnimal);

