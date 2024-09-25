import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';
import { TribeMember, Tomohavk, Apache, Redneck, Item, Weapon, Dog, Tools } from './tribes.js';
import _ from 'lodash';
const getPath = (fPath) => {
    return path.resolve() + fPath;
}

const writeDownPeopleList = () => {
    const fPath = getPath('/people.json');
    return peopleList = JSON.parse(fs.readFileSync(fPath));
}
const peopleListToString = () => {
    fs.writeFileSync(fPath, JSON.stringify(peopleList, null, 2), 'utf-8');
}

const setPerson = (person) => {
    // узнаём путь, потом пушим в живых person
    writeDownPeopleList();
    peopleList.alive.push(person);
    
}
const deleteDeadPerson = (person) => {
    writeDownPeopleList();
   
    //const indexAlivePerson = peopleList.alive.map();
    const namePerson = person.name;
    const filtered = peopleList.alive.filter(({name}) => name !== namePerson)
    peopleList.alive = filtered;
    peopleListToString();
}
    
   
const updatePerson = (person) => {
    writeDownPeopleList();
    const namePerson = person.name;
    const filtered = peopleList.alive.filter(({name}) => name !== namePerson)
    peopleList.alive = filtered;
    peopleList.alive.push(person);
    peopleListToString();
}

const backToClass = (name, className) => {
    writeDownPeopleList();
    const filtered = peopleList.alive.filter(({nameIter}) => name === nameIter).at(0);
    let classObject;
    switch (filtered.className) {
        case 'apache':
            classObject = new Apache(name);
            break;
        case 'redneck':
            classObject = new Redneck(name);
            break;
        case 'weapon':
            classObject = new Weapon(name);
            break;
        case 'tomohawk':
            classObject = new Tomohavk(name);
            break;
        default:
            classObject = new Tools(name);
            break;
    }
    const entries = Object.entries(filtered);
    for ([key, value] of entries) {
        if (_.isObject(value)) {
            classObject[key] = value.map((item) => backToClass(item));            
        } else {
        classObject[key] = value;
        }
    }

}