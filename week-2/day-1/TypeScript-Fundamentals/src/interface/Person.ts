interface IPerson {
  fullName: string;
  location: string;
  isProgrammer: boolean;
}

let person1: IPerson = {
  fullName: "King",
  location: "",
  isProgrammer: false
};

let person2: IPerson = {
  fullName: "Queen",
  location: "UK",
  isProgrammer: true
}

console.log(`Person 1: ${person1.fullName}`);
console.log(`Person 2: ${person2.location}`);