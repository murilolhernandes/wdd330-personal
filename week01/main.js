import U, { printName as printUserName, printAge } from './W01LearningAssignment.js';

const user = new U('Bob', 11);
console.log(user);
printUserName(user);
printAge(user);