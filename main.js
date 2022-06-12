alert('hello world')
 const name = 'John' ;
 const age = 30;

// concaenation
// console.log('My name is'+ name + 'and I am '+ age);
// Template Literals
const hello = 'My name is  ${name} and I am ${age}';
console.log('hello')

// // arrays

const num = new Array(1,2,3,4,5);
console.log ("num");

// Object literls

const person = {
    firstname: 'John',
    lastname: 'Doe',
    age:30,
    hobbies: ['msucic','googling', 'sports'],
    address: {
        street: 'sreenivasa garden',
        city: 'Palakkad',
        state: 'MA',
    }
}
console.log(person)

// objec destructuring
const {firstname, lastname, address:{city}}= person;
console.log(city);

// add property
person.email = 'john@gmail.com';
console.log(person)

const todos =  [
    {
        id: 1,
        text:'Take out Trash',
        IsCompleted: true
    },
    {
        id: 1,
        text:'eating with friends',
        IsCompleted: true
    },
    {
        id: 1,
        text:'Good morning all',
        IsCompleted: false
    }
]
// this is how we send data to the server
const todosJSON = JSON.stringify(todos);
console.log(todosJSON)

// For loops

// while loops

// functions and arrow functions

/******************* OOPS *******************/
// constrcutor function

// function Person(firstname, lastname, dob) {
//     this.firstname= firstname;
//     this.lastname=lastname;
//     this.dob=dob;
//   }
// Instantiate Object
const Person1 = new Person("John", "Doe", "4-3-1990");

// console.log(Person1.firstname)

// you can also add a method to the constrcutor

function Person(firstname, lastname, dob) {
    this.firstname= firstname;
    this.lastname=lastname;
    // this.dob= dob;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.firstname} ${this.lastname}`;
    }
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
  }
console.log(Person1.getBirthYear());
console.log(Person1.getFullName());

// prototypes

function Person(firstname, lastname, dob) {
    this.firstname= firstname;
    this.lastname=lastname;
    // this.dob= dob;
    this.dob = new Date(dob);
}

    Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function() {
        return `${this.firstname} ${this.lastname}`;
    }
console.log(Person1.getBirthYear());
console.log(Person1.getFullName());

// classes

class Person {
    constructor (firstname, lastname, dob) {
        this.firstname= firstname;
        this.lastname=lastname;
        this.dob = new Date(dob);
    }

    getFullYear() {
        return this.dob.getFullYear();
    }
    getFullName () {
        return `${this.firstname} ${this.lastname}`;

    }
}
// above class is similar to the function and prototypes mentioned earlier. This is makes a prtotype too.
// the same thing doing in the differen way.
