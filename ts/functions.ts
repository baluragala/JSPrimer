// let addNumbers =  (a: number, b: number): number => {
//     return a + b;
// }



// function concatStringsDefault(
//     a: string,
//     b?: string,
//     c: string = 'char') {
// return a + b + c;
// }

// var defaultConcat = concatStringsDefault('a','b');
// console.log(`defaultConcat : ${defaultConcat}`);



function makeCoffee(quantity:number, callback: (statusMessage: string) => void /*function type*/): void {
    let message = `Prepared ${quantity} coffee`;
    console.log(`Preparing ${quantity} coffee`);
    callback(message);
}

let callback = (statusMessage: string) => console.log(`Serving to table :${statusMessage}`)

makeCoffee(10, callback);