const School = require('./School');

class MiddleSchool extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
  }
}

module.exports = MiddleSchool;
