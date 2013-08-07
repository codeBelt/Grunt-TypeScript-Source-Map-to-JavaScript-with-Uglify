///<reference path='Person.ts'/>

class Man extends Person {

    constructor(name:string, age:number) {
        super(name, age);
    }

    public getDescription():string {
        var originalDescription:string = super.getDescription();
        return originalDescription + " and is a man";
    }

}