/* 
You're going on a trip with some students
 and it's up to you to keep track of
  how much money each Student has.
   A student is defined like this:
*/
/* 
As you can tell, each Student has some fives, tens, and twenties. 
Your job is to return the name of the student with the most money.
 If every student has the same amount, then return "all".

Each student will have a unique name
There will always be a clear winner: either one person has the most,
 or everyone has the same amount
If there is only one student, then that student has the most money
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
const stephen = new Student('Stephen', 9, 4, 0);
const seric = new Student('Seric', 8, 1, 0);
const eric = new Student('Eric', 9, 4, 0);
const david = new Student('David', 2, 0, 1);
const phil = new Student('Phil', 0, 2, 1);
const cam = new Student('Cameron', 2, 2, 0);
const geoff = new Student('Geoff', 0, 3, 0);
const ryan = new Student('Ryan', 0, 0, 20);

const studentNames = [andy, seric, stephen, david, phil, eric, cam, geoff];
const studentTotals = [];
studentNames.forEach(student => {
  studentTotals.push({
    name: student.name,
    total: student.fives * 5 + student.tens * 10 + student.twenties * 20
  });
});

const students = [
  { name: 'Andy', total: 40 },
  { name: 'Seric', total: 50 },
  { name: 'Stephen', total: 85 },
  { name: 'David', total: 30 },
  { name: 'Phil', total: 40 },
  { name: 'Eric', total: 85 },
  { name: 'Cameron', total: 30 },
  { name: 'Geoff', total: 30 }
];

const max = Math.max(...students.map(e => e.total));

//const result = students.find(student => student.total === max);
const result = students.filter(student => student.total == max);

console.log(result);

/* const max = studentTotals.reduce((prev, current) =>
  prev.total > current.total ? prev : current
);


console.log(max); */
/* let max = 0;
let name = '';
for (const student of studentNames) {
  const amount = student.fives * 5 + student.tens * 10 + student.twenties * 20;
  if (amount > max || amount === max) {
    max = amount;
    name = student.name;
  }
}
result.push(name);
console.log(result); */
