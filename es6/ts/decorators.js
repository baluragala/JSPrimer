var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* class decorator */
function simpleDecorator(constructor) {
    console.log('********CLASS**************');
    console.log('constructor', constructor);
    console.log('simpleDecorator called.');
}
/*method decorator*/
function audit(target, methodName, descriptor) {
    console.log('********METHOD**************');
    console.log('target', target);
    console.log('methodName', methodName);
    console.log('descriptor', descriptor);
    console.log('**********************');
    var originalFunction = target[methodName];
    var auditFunction = function () {
        console.log("auditLogDec : overide of "
            + (" " + methodName + " called "));
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
}
/* property decorator */
function propertyDec(target, propertyKey) {
    console.log('********PROPERTY**************');
    console.log("target : " + target);
    console.log("target.constructor : " + target.constructor);
    console.log("class name : "
        + ("" + target.constructor.name));
    console.log("propertyKey : " + propertyKey);
    console.log('**********************');
}
var Person = (function () {
    function Person() {
    }
    Person.prototype.print = function (fullName) {
        console.log("Person.print"
            + ("(" + fullName + ") called."));
    };
    __decorate([
        propertyDec
    ], Person.prototype, "fullName");
    __decorate([
        audit
    ], Person.prototype, "print");
    Person = __decorate([
        simpleDecorator
    ], Person);
    return Person;
}());
var p = new Person();
p.print("Bala Krishna");
