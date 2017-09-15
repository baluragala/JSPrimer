var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function simpleDecorator(constructor) {
    console.log('********CLASS**************');
    console.log('constructor', constructor);
    console.log('simpleDecorator called.');
}
function audit(target, methodName, descriptor) {
    var originalFunction = target[methodName];
    var auditFunction = function () {
        console.log("audit : overide of "
            + (" " + methodName + " called "));
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
}
function propertyDec(target, propertyKey) {
    console.log('********PROPERTY**************');
    console.log("target : " + target);
    console.log("target.constructor : " + target.constructor);
    console.log("class name : "
        + ("" + target.constructor.name));
    console.log("propertyKey : " + propertyKey);
    console.log('**********************');
}
var Person1 = (function () {
    function Person1() {
    }
    Person1.prototype.print = function (fullName) {
        console.log("Person.print"
            + ("(" + fullName + ") called."));
    };
    __decorate([
        propertyDec
    ], Person1.prototype, "fullName", void 0);
    __decorate([
        audit
    ], Person1.prototype, "print", null);
    Person1 = __decorate([
        simpleDecorator
    ], Person1);
    return Person1;
}());
var p1 = new Person1();
p1.print("Bala Krishna");
//# sourceMappingURL=decorator.js.map