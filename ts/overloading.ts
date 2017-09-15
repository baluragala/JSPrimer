let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getNumbers(all: boolean): number[];
function getNumbers(divisibleBy: number): number[];
function getNumbers(obj: object): number[];
function getNumbers(genericProp: any): number[] {
    let result: number[];
    if (typeof genericProp == 'boolean') {
        result = numbers;
    }

    if (typeof genericProp == 'number') {
        result = numbers.filter(n => n % genericProp == 0);
    }

    if (typeof genericProp == 'object') {
        result = numbers.filter(n => n % genericProp == 0);
    }
    return result;
}
