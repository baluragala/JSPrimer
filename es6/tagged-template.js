let name = ' Mary '
let language = 'ES6'

function underline(staticStrings,...dynamicValues){
    console.log(staticStrings, dynamicValues)
    return 'cool';
}

const message = underline`Hello ${name}, welcome to ${language}`
console.log(message);

