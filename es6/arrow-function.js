// const print =  function(name){
//     console.log(name);
// }

// print('Bala');

let numbers = [1,2,3,4,5,6,7,8];

let evens = numbers.filter(function(n){
    return n % 2 === 0
})


let evens1 = numbers.filter(n =>n % 2 === 0)

let noparams = () => "NO"

let noparams1 = function(){
    return "NO"
}


let calculatePrice = (price, discount, tax) => {
    let discountPrice = price - discount;
    let taxPrice = price + tax;
    return price + discountPrice;
}



console.log(evens);
console.log(evens1);