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
  }
}
