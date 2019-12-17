/* 
You're going on a trip with some students
 and it's up to you to keep track of
  how much money each Student has.
   A student is defined like this:
*/

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student('Andy', 0, 0, 2);
const stephen = new Student('Stephen', 0, 4, 0);
const eric = new Student('Eric', 8, 1, 0);
const david = new Student('David', 2, 0, 1);
const phil = new Student('Phil', 0, 2, 1);
const cam = new Student('Cameron', 2, 2, 0);
const geoff = new Student('Geoff', 0, 3, 0);

const studentNames = [andy, stephen, eric, david, phil, cam, geoff];
const studentTotals = [];
studentNames.forEach(student => {
  studentTotals.push({
    name: student.name,
    total: student.fives * 5 + student.tens * 10 + student.twenties * 20
  });
});

let result = studentTotals
  .map(s => s.total)
  .reduce((a, b) => {
    return a + b;
  });
const numbers = [1, 4, 6, 8, 10];
let max = Math.max.apply(
  Math,
  studentTotals.map(o => {
    return o.total;
  })
);
console.log(max);
console.log(studentTotals);
