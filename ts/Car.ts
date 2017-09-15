class Car {
    
        private _make: String;
        private _model: String;
        private _price: Number;
    
        get make(): String {
            return this._make;
        }
    
        set make(value: String) {
            this._make = value;
        }
    
        get model(): String {
            return this._model;
        }
    
        set model(value: String) {
            this._model = value;
        }
    
        get price(): Number {
            return this._price;
        }
    
        set price(value: Number) {
            if (value <= 0)
                throw new Error('Price must be greater than 0');
            this._price = value;
        }
    
    
        constructor(make: String, model: String, price: Number) {
            this.make = make;
            this.model = model;
            this.price = price;
        }
    
        toString() {
            return `Make: ${this.make}, Model: ${this.model}`;
        }
    
    }
    
    
    let car = new Car('Maruti', 'Ciaz', -10);