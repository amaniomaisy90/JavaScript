const getPeopleOfClass = (className) => {
  const { currentModule } = classes.find((item) => item.name === className);

  const studentsClass = students
    .filter((student) => student.class === className)
    .map((student) => {
      return { name: student.name, role: 'student' };
    });

  const mentorsClass = mentors
    .filter((mentor) => mentor.nowTeaching === currentModule)
    .map((mentor) => {
      return { name: mentor.name, role: 'mentor' };
    });

  return [...studentsClass, ...mentorsClass];

};
console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  const activeClasses = classes.filter((specificClass) => specificClass.active);

  return activeClasses.reduce((accumulator, activeClass) => {
    return {
      ...accumulator,
      [activeClass.name]: getPeopleOfClass(activeClass.name),
    };
  }, {});
};
console.log(getActiveClasses());
