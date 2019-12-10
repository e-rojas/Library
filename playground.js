/* const obj = { book: [], cd: [], movie: [] };

const movie = { title: 'Title One', director: 'Director Name' };

obj.movie.push(movie);
obj['other'] = [];
console.slog(obj);
 */

/* const someArray = [1, 2, 3, 4, 5];

const result = someArray.sort(() => Math.random() - 0.5);
console.log(result);
 */

/* const num = 200;
if (isNaN(num)) {
  console.log('is not a number');
} else {
  console.log('is a number');
}
console.log(isNaN(num));
 */

const teachers = ['Tom', 'Jerry', 'Frank', 'James', 'Alan'];
function pickSubstituteTeacher(substituteTeachers) {
  const choice = Math.floor(substituteTeachers.length * Math.random());

  console.log(choice);
  return substituteTeachers[choice];
}
console.log(teachers.length);
console.log(pickSubstituteTeacher(teachers));
