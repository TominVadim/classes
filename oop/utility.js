import fs from 'fs';
import path from 'path';
import readlineSync from 'readline-sync';
import _ from 'lodash';
import {
  TribeMember, Tomohavk, Apache, Redneck, Item, Weapon, Dog, Tools,
} from './tribes.js';

const getPath = (fPath) => path.resolve() + fPath;

const readDownPeopleList = () => {
  const fPath = getPath('/people.json');
  const peopleList = JSON.parse(fs.readFileSync(fPath));
  return peopleList;
};
const peopleListToString = () => {
  fs.writeFileSync(fPath, JSON.stringify(peopleList, null, 2), 'utf-8');
};

const setPerson = (person) => {
  // узнаём путь, потом пушим в живых person
  const peopleList = readDownPeopleList();
  peopleList.alive.push(person);
};
const deleteDeadPerson = (person) => {
  readDownPeopleList();

  // const indexAlivePerson = peopleList.alive.map();
  const namePerson = person.name;
  const filtered = peopleList.alive.filter(({ name }) => name !== namePerson);
  peopleList.alive = filtered;
  peopleListToString();
};

const updatePerson = (person) => {
  readDownPeopleList();
  const namePerson = person.name;
  const filtered = peopleList.alive.filter(({ name }) => name !== namePerson);
  peopleList.alive = filtered;
  peopleList.alive.push(person);
  peopleListToString();
};

const backToClass = (name) => {
  readDownPeopleList();
  const filtered = peopleList.alive.filter(({ nameIter }) => name === nameIter).at(0);
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
  // for ([key, value] of entries) {
  //     if (_.isObject(value)) {
  //         classObject[key] = value.map((item) => backToClass(item));
  //     } else {
  //     classObject[key] = value;
  //     }
  // }
  entries.forEach(([key, value]) => {
    classObject[key] = _.isObject(value) ? value.map((item) => backToClass(item)) : value;
  });

  return classObject;
};
