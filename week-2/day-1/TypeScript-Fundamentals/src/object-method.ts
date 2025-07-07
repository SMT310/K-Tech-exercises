interface ISpeech {
  sayHi(name: string): string;
  sayBye(name: string): string;
}

let sayStuff: ISpeech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`
};

console.log(sayStuff.sayHi('Son'));
console.log(sayStuff.sayBye('Son'));
