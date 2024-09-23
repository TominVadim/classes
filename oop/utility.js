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
const addDeadPerson = (person) => {
    const path = getPath('/people.json');
    const peopleList = JSON.parse(fs.readFileSync(path));
   
    //const indexAlivePerson = peopleList.alive.map();
    const namePerson = person.name;
    
    const deadmanIndex= peopleList.alive.reduce((acc, {name},index) => {
        return name === namePerson ? index : acc;
    }, 0);
    
    peopleList.alive = peopleList.alive.filter(({name}, index) => index !== deadIndex);
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2));
}
    
   
setPerson({
    name: 'Valera',
    age: 22,
    health: 23,
    tools: [ { name: 'axe', durability: 5, damage: 1 } ],
    damage: 7,
    warSkill: 68
    
})