var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getNumbers(genericProp) {
    var result;
    if (typeof genericProp == 'boolean') {
        result = numbers;
    }
    if (typeof genericProp == 'number') {
        result = numbers.filter(function (n) { return n % genericProp == 0; });
    }
    if (typeof genericProp == 'object') {
        result = numbers.filter(function (n) { return n % genericProp == 0; });
    }
    return result;
}
//# sourceMappingURL=overloading.js.map