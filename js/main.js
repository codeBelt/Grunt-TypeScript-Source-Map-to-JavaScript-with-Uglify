var anothernamespace;
(function (anothernamespace) {
    var Person = (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.getDescription = function () {
            var obj = {};
            console.log(obj.property.anotherProperty);

            return this.name + " is " + this.age + " years old.";
        };
        return Person;
    })();
    anothernamespace.Person = Person;
})(anothernamespace || (anothernamespace = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var mynamespace;
(function (mynamespace) {
    var Person = anothernamespace.Person;

    var Man = (function (_super) {
        __extends(Man, _super);
        function Man(name, age) {
            _super.call(this, name, age);
        }
        Man.prototype.getDescription = function () {
            var originalDescription = _super.prototype.getDescription.call(this);
            return originalDescription + " and is a man";
        };
        return Man;
    })(anothernamespace.Person);
    mynamespace.Man = Man;
})(mynamespace || (mynamespace = {}));
//# sourceMappingURL=main.js.map
