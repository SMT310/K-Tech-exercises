export default class Student {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  get getID() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }

  set setID(id: number) {
    this.id = id;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setAge(age: number) {
    this.age = age;
  }
}

