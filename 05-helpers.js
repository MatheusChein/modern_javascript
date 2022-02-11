const tech = 'Node.js';
const techs = ['Node.js', 'React', 'Typescript']

const stringIncludes1 = tech.includes('Nod') // true
const stringIncludes2 = tech.includes('nod') // false

const arrayIncludes1 = techs.includes('Nod') // false
const arrayIncludes2 = techs.includes('Node.js') // true

const startsWith1 = tech.startsWith('Nod') // true
const startsWith2 = tech.startsWith('nod') // false

const endsWith1 = tech.endsWith('.js') // true
const endsWith2 = tech.endsWith('.sj') // false