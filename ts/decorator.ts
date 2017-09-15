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
class Person1 {

    @propertyDec
    fullName:string;

    @audit
    //some line here
    print(fullName: string) {
        console.log(`Person.print`
            + `(${fullName}) called.`);
    }
    //some line here
}

let p1 = new Person1();
p1.print("Bala Krishna"); 
