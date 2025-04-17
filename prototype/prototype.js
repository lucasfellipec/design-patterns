/* const personPrototype = {
    name: "John Mark",
    surname: "Doe",
    age: 16,

    fullName() {
        return `${this.name} ${this.surname}`;
    }
};

const person = Object.create(personPrototype);
person.name = "Jane Harimoto" // Shadowing

console.log(person);
console.log(person.name);
console.log(person.fullName());

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function Inheritance(name, surname, age) {
    Person.call(this, name, surname, age);
    this.fromSubClass = "Hi";
}

Inheritance.prototype = Object.create(Person.prototype);
Inheritance.prototype.constructor = Inheritance;

const anotherPerson = new Person("Togashi", "Harimoto", 26);

console.log(anotherPerson);
console.log(anotherPerson.fullName());

const p = new Inheritance("Helena", "Ferreira", 23);
console.log(p);
console.log(p.fullName()); */
