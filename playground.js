/* const obj = { book: [], cd: [], movie: [] };

const movie = { title: 'Title One', director: 'Director Name' };

obj.movie.push(movie);
obj['other'] = [];
console.slog(obj);
 */

const someArray = [1, 2, 3, 4, 5];

const result = someArray.sort(() => Math.random() - 0.5);
console.log(result);
