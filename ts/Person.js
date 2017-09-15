var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value <= 0)
                throw new Error('Age cannot be negative');
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var bala = new Person('Bala ', -32);
//# sourceMappingURL=Person.js.map