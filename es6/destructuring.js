const customer = {
    firstName : 'Hill',
    lastName : 'Junior',
    city : 'Newyork'
}

let {firstName,lastName, city='default'} = customer;
console.log(firstName,lastName,city);

let fruits = ['Apple','Orange','Peer','Banana'];

let [f1,f2,f3, ...restOf] = fruits;
console.log(f1,f2,f3,restOf)
