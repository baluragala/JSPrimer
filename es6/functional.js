let fruits = ['Apple','Orange','Peer'];

for(let i=0; i< fruits.length; i++){
    console.log(fruits[i].toUpperCase())
}
console.log('---------------------------')

for(let fruit of fruits){
    console.log(fruit.toUpperCase())
}

console.log('---------------------------')

let upperFruits = fruits.forEach(fruit => console.log(fruit.toUpperCase()))
console.log(upperFruits);

console.log('---------------------------')
let upperFruits1 = fruits.map( fruit => console.log(fruit.toUpperCase()))
console.log(upperFruits1);
console.log(fruits);
