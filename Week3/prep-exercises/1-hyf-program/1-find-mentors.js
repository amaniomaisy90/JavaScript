import { modules, students, mentors, classes } from './hyf.js';

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const availableMentors = mentors
    .filter(({ canTeach }) => canTeach.includes(moduleName))
    .map(({ name }) => name);
  return availableMentors;
};


console.log(possibleMentorsForModule('using-apis'));
console.log(possibleMentorsForModule('javascript'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const availableMentors = possibleMentorsForModule(moduleName);
  if (availableMentors.length >= 0) {
    const randomNumber = Math.floor(Math.random() * availableMentors.length);
    return availableMentors[randomNumber];
  } else {
    console.log('No available mentor for this module');
  }
};
console.log(findMentorForModule('javascript'));
