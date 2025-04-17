interface Prototype {
    clone(): Prototype;
};

class Address implements Prototype {
    public street: string;
    public number: number;

    constructor(_street: string, _number: number) {
        this.street = _street;
        this.number = _number;
    }

    clone(): Address {
        return new Address(this.street, this.number);
    }
};

class Person implements Prototype {
    public name: string;
    public age: number;
    public addresses: Address[] = [];

    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }

    clone(): Person {
        const newObject = new Person(this.name, this.age);
        newObject.addresses = this.addresses.map((item) => item.clone());

        return newObject;
    }

    insertAddress(address: Address): void {
        this.addresses.push(address);
    }
};

const address1 = new Address("Utah", 15);
const person1 = new Person("Jane Doe", 23);
person1.insertAddress(address1);

const person2 = person1.clone();

person1.addresses[0].street = "abcdef";

person2.name = "Mark";
console.log(person2);
console.log(person2.name);
console.log(person2.addresses);

console.log(person1);
