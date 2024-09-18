// абстракция
class TribeMember {
    // создаем конструктор объекта
    constructor(name) {
        this.name = name;
        this.age = Math.round(Math.random() * 100);
        this.health = Math.round(Math.random() * 100);
    }

    getInfo() {
        console.log(`Абориген ${this.name}, ему ${this.age} лет и его здоровье равно ${this.health}`);
    }
    
    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} получил ${damage} урона. Теперь его здоровье равно ${this.health}`);
        if (this.health <= 0) {
            console.log(`${this.name} убит`);
            return true;
        } else {
            return false;
        }
    }
    addTool(tool) {
        this.tools.push(tool);
    }

    getToolList() {
        const list = this.tools.map(({name, durability}) => `${name}, ${durability}`)
        console.log(`${this.name} имеет в багаже: ${list.join('; ')}`);
    }
    
}

// дочерние классы
class Apache extends TribeMember {
    constructor(name) {
        // обращаемся к конструктору TribeMember
        super(name);
        this.farmingSkill = 60 + Math.round(Math.random() * 40);
        if (this.health >= 40) {
            this.health = Math.round(Math.random() * 40)
        }
        this.tools = [];
    }

    getDescription() {
        this.getInfo();
        console.log(`Абориген ${this.name} живет в племени Апаче, имеет навык земледелия ${this.farmingSkill}`);
        this.getToolList()
    }


}

// создаем класс реднеков (здоровье выше 60, навык войны)
class Redneck extends TribeMember {
    constructor(name) {
        //обращаемся к конструкутуру TribeMemeber
        super(name);
        this.warSkill = 60 + Math.round(Math.random() * 40);
        if (this.health >= 60) {
            this.health = Math.round(Math.random() * 60);
    
        }

    }
    getDescription() {
        this.getInfo();
        console.log(`Абориген ${this.name} живёт в племени Реднеков имеет навык войны ${this.warSkill}`);
        this.getToolList();
    }
}


//Valera.getDescription();

// создадим класс оружия
class Item {
    constructor(name) {
        this.name = name;
        this.durability = Math.round(Math.random() * 5);
        this.damage = 1;
    }

    use() {
        if (this.durability > 0) {
            this.durability -= 1;
            console.log(`${this.name} использован. Осталось ${this.durability} использований`);
            return true;
        } else {
            console.log(`${this.name} сломан, больше не используется.`);
            return false;
        }
    }
    
}

class Weapon extends Item {
    constructor(name) {
        super(name);
        this.durability += 3;
        this.damage += Math.round(Math.random() * 5);
    }
}

class Tools extends Item {
    constructor(name) {
        super(name);
    }
    
}

const Vitaly = new Apache('Vitaly');
const Valera = new Redneck('Valera');


const Daniil = new TribeMember('Daniil');
//console.log(Vitaly)

const motiga = new Tools('motiga');
const shovel = new Tools('shovel');
Vitaly.addTool(motiga);
Vitaly.addTool(shovel);

//italy.getDescription();
Vitaly.takeDamage();