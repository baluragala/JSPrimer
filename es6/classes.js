// class Car1{

//     constructor(make,price){
//         this.make = make
//         this.price = price
//     }

// }

// let c1 = new Car1('Maruti',600000);
// console.log(c1)

// function Car(make, price) {
//     this.make = make
//     this.price = price
// }

// Car.prototype.start =  function(){
//     console.log('Starting..')
// }

// Car.prototype.toString =  function(){
//     console.log('Car in string')
// }

// let c = new Car('Maruti',600000);
// console.log(c)


// function ElectricCar(){

// }

// ElectricCar.prototype = Car


class Car {
    
    constructor(name){
        this.name = name
    }

    print(){
        console.log('this is car')
    }
}


class ElectricCar extends Car {
    constructor(name,powerCapacity){
        super(name)
        this.powerCapacity = powerCapacity
    }

    print(){
        console.log('this is ElectricCar')
    }
}

let e = new ElectricCar('Power1',500)