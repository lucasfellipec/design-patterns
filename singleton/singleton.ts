interface User {
    name: string;
    age: number;
};

class SingletonDatabase {
    private static _instance: SingletonDatabase | null = null;
    private users: User[] = []

    private constructor() {}

    static get instance(): SingletonDatabase {
        if (SingletonDatabase._instance === null) {
            SingletonDatabase._instance = new SingletonDatabase();
        }

        return SingletonDatabase._instance;
    }

    public insert(user: User): void {
        this.users.push(user);
    }

    public remove(id: number): void {
        this.users.splice(id, 1);
    }

    public select(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
};

const db = SingletonDatabase.instance;

db.insert({ name: "John Doe", age: 16 });
db.insert({ name: "Mark", age: 19 });
db.insert({ name: "Jane Doe", age: 21 });

db.select();
