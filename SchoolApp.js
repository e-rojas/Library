const School = require('./High');
const PrimarySchool = require('./Primary');
const HighSchool = require('./High');

const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

lorraineHansbury.quickFacts;

console.log(
  School.pickSubstituteTeacher([
    'Jamal Crawford',
    'Lou Williams',
    'J. R. Smith',
    'James Harden',
    'Jason Terry',
    'Manu Ginobli'
  ])
);
const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field'
]);

console.log(alSmith.sportsTeams);
