class Person {

    public name:string;
    public age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    public getDescription():string {
        return this.name + " is " + this.age + " years old.";
    }

}