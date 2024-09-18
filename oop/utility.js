import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';

const getPath = (fPath) => {
    return path.resolve() + fPath;
}
const setPerson = () => {
    // узнаём путь, потом пушим в живых person
    const path = getPath('\\people.json');
    const peopleList = JSON.parse(fs.readFileSync(path));
    peopleList.alive.push(person)
    fs.writeFileSync(path, JSON.stringify(peopleList, null, 2));
}
const addDeadPerson = () => {
    
}