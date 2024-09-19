import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';

const getPath = (fPath) => {
    return path.resolve() + fPath;
}
const setPerson = (person) => {
    // узнаём путь, потом пушим в живых person
    const path = getPath('/people.json');
    const peopleList = JSON.parse(fs.readFileSync(path));
    peopleList.alive.push(person);
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2));
}
// const addDeadPerson = ('/people.json') => {
//     const path = getPath();
//     const peopleList = JSON.parse(fs.readFileSync(path));
//     const indexAlivePerson = peopleList.alive.map();
//     const namePerson = person.name;
//     const personObj= peopleList.alive.filter(({name}) => name === namePerson);
//     const newArray = [...peopleList.alive.slice(0, indexAlivePerson - 1), ...peopleList.alive.slice(indexAllivePerson)];

// }   
setPerson({
    name: 'Valera',
    age: 22,
    health: 23,
    tools: [ { name: 'axe', durability: 5, damage: 1 } ],
    damage: 7,
    warSkill: 68
    
})