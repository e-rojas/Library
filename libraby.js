/* 
BOOK:
*author *title *pages *isCheckedOut= false *ratings = []
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

MOVIES:
*director *title *runTime *isCheckedOut = false *ratings = []
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD:
*artist *title * isCheckedOut = false * ratings = [] * songs = ['song 1','song 2']
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
*/
class Catalog {
  constructor(title) {
    this._title = title;
    this._mediaType = { book: [], movie: [], cd: [] };
  }
  addMedia(type, info) {
    this._mediaType[type].push(info);
  }
}
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  get averageRating() {
    let sumValues = this._ratings.reduce(
      (previous, current) => (current += previous)
    );
    let avg = sumValues / this._ratings.length;
    return avg.toFixed(2);
  }
  addRating(value) {
    this._ratings.push(value);
  }

  set isCheckedOut(bool) {
    return (this._isCheckedOut = bool);
  }
}
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._ratings;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}
class CD extends Media {
  constructor(artist, title) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  shuffle() {
    const result = this._songs.sort(() => Math.random() - 0.5);
    return result;
  }
  addSong(songName) {
    this._songs.push(songName);
  }
}

/* 

Create a Book instance with the following properties:

Author: 'Bill Bryson'
Title: 'A Short History of Nearly Everything'
pages: 544
Save the instance to a constant variable named historyOfEverything.
*/

const historyOfEverything = new Book(
  'Bill Bryson',
  'A Short History of Nearly Everything',
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.averageRating);
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.averageRating);
const jessyReyes = new CD('Jessy Reyes', 'Far Away');
jessyReyes.addSong('Risk it all.');
jessyReyes.addSong('Easy breazy.');
jessyReyes.addSong('Come trhoug.');
jessyReyes.addSong('Summer walk.');
jessyReyes.addSong('Walk by my side.');

jessyReyes.addRating(2);
jessyReyes.addRating(5);
jessyReyes.addRating(3);
jessyReyes.addRating(4.2);
console.log(jessyReyes.averageRating);
console.log(jessyReyes.shuffle());
