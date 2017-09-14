const arr1 = [1, 2, 3, 4]
const arr2 = [6, 7, 8, 9]

const arr3 = [...arr1, 5, ...arr2]
console.log(arr3)


const customer = [
    'Hill',
    'Junior',
    'Newyork']


function wish(...customer){
    console.log(customer)
}

wish(...customer);