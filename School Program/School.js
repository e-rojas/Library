class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  get quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this._level} school level.`
    );
  }
  set numberOfStudents(numOfStudents) {
    if (isNaN(numOfStudents)) {
      console.log(
        `${numOfStudents} Invalid input: numberOfStudents must be set to a Number.`
      );
    } else {
      this._numberOfStudents = numOfStudents;
    }
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const choice = Math.floor(substituteTeachers.length * Math.random());

    return substituteTeachers[choice];
  }
  static numOfStudents() {}
}

module.exports = School;
