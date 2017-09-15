/* class decorator */
function simpleDecorator(constructor: Function) {
    console.log('********CLASS**************')
    console.log('constructor', constructor);
    console.log('simpleDecorator called.');
}

/*method decorator*/
function audit(target: any,
    methodName: string,
    descriptor?: PropertyDescriptor) {
    console.log('********METHOD**************')
    console.log('target', target)
    console.log('methodName', methodName)
    console.log('descriptor', descriptor)
    console.log('**********************')
    let originalFunction = target[methodName];

    let auditFunction = function () {
        console.log(`audit : overide of `
            + ` ${methodName} called `);
        originalFunction.apply(this, arguments);
    }

    target[methodName] = auditFunction;
}

/* property decorator */
function propertyDec(target: any, propertyKey: string) {
    console.log('********PROPERTY**************')
    console.log(`target : ${target}`);
    console.log(`target.constructor : ${target.constructor}`);
    console.log(`class name : `
        + `${target.constructor.name}`);
    console.log(`propertyKey : ${propertyKey}`);
    console.log('**********************')
}

@simpleDecorator
class Person {

    @propertyDec
    fullName:string;

    @audit
    print(fullName: string) {
        console.log(`Person.print`
            + `(${fullName}) called.`);
    }
}

let p = new Person();
p.print("Bala Krishna"); 
