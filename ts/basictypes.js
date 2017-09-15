var username;
var age = 32;
var qualified;
username = 'bala krishna ragala';
console.log(typeof username);
username = {};
console.log(typeof username);
username = true;
console.log(typeof username);
age = 30;
var Color;
(function (Color) {
    Color[Color["Red"] = 1000] = "Red";
    Color[Color["Green"] = 2000] = "Green";
    Color[Color["Blue"] = 3000] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
//# sourceMappingURL=basictypes.js.map