import Student from './student';
import GoodStudent from './GoodStudent';

let s1 = new Student(1, 'Tai', 18);
let s2 = new Student(2, 'Min', 20);
let s3 = new Student(3, 'Hng', 22);

let sArr: Student[] = new Array();

sArr.push(s1);
sArr.push(s2);
sArr.push(s3);

let s4 = new GoodStudent(4, 'Khai', 25, 'Intermediate');
sArr.push(s4);
console.log(sArr);
