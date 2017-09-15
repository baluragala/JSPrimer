var Car = (function () {
    function Car(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }
    Object.defineProperty(Car.prototype, "make", {
        get: function () {
            return this._make;
        },
        set: function (value) {
            this._make = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value <= 0)
                throw new Error('Price must be greater than 0');
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.toString = function () {
        return "Make: " + this.make + ", Model: " + this.model;
    };
    return Car;
}());
var car = new Car('Maruti', 'Ciaz', -10);
//# sourceMappingURL=Car.js.map