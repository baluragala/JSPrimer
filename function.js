function square(number){
    return number * number;
}

var cube = function (n){
    return n  * n * n;
}

var anotherCube = cube;

console.log(typeof cube)

var result = anotherCube(5);

console.log('Result :' + result);
