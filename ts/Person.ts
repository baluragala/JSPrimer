class Person {
    private _name: string;
    private _age: number;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value <= 0)
            throw new Error('Age cannot be negative')
        this._age = value;
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}



let bala: Person = new Person('Bala ', -32);