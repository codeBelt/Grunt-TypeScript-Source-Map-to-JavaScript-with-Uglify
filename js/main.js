var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDescription = function () {
        return this.name + " is " + this.age + " years old.";
    };
    return Person;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
})(Person);
//# sourceMappingURL=main.js.map
