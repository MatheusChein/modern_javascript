const user = {
  firstName: 'Matheus',
  lastName: 'Chein',
  full_name: 'Matheus Chein',
  age: 27,
  skills: ['Back-end', 'Front-end', 'Mobile']
}

const { firstName, lastName, full_name: fullName, skills } = user;
const [ primary, secondary, terciary ] = skills;

console.log(firstName, lastName, fullName, skills);
console.log(primary, secondary, terciary);