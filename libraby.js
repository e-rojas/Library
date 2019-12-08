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
  getAverageRating() {
    let sumValues = this._ratings.reduce(
      (previous, current) => (current += previous)
    );
    let avg = sumValues / this._ratings.length;
    return avg;
  }
  addRating(value) {
    this._ratings.push(value);
  }
  getAverageRating() {}
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
}
