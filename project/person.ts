interface IPerson {
    name: ()=> string;
    firstPerson: string;
    lastPerson: string;
}

class Person implements IPerson {
    firstName: string;
    lastName: string;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return this.firstName + " " + this.lastName;
    }
     
}

external = Person;