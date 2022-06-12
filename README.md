High level, interpreted programming language - scripting
Customs to ECMA script specifications
Multi paradiagm
client, brower and server(nodejs)

Why Js ?

- language of browser
- interactive UI like react, anugalr etc
  buidling very fast server side and full stack application.
  make desktop app using Electron JS/

<!--  other youtube references

1.JS DOM Crash course
2. JS OOP crash course
3. High order Array methods
4.Async JS course
5. Fetch Api and Ajax
6. Vannila JS playlist
7. Freamework Crash course -->

you executre from the console.
clear()
console MDN docs - imp for debugging
console.error()
console.warm()

<!-- variables -->

var -is globally scopred
let, const - ES6 -
let - you can re assign the values
const - cannot be directly be reassigned

<!-- Data Types -->

strings
numbers
boolean
Null -In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an objec
undefined
symbol - aded in ES6

there is no float or decimal data type in JS

// Concatenation
// Template Literals (in ES6)
const s= 'hello world';
console.log(s.lenght);
toUpperCase()
toLowerCase()
subString()
split('') =split by letter - so we get an array of 12 value -
split(',') - you can use seperator to make into an array

<!-- Arrays -->

That h0ld multiple values

new is a constrcutor
JS can have multiple data types in an array unlike other languages
const is used - because u can manipulate and use methods, but cannot re assign .

push() - to add to the end
unshift - to the beggining
pop() - to remove the lastone
Array.isArray () - to check something in the array - will get true or false value.

fruits. indexOf() = to check the index off/

concatenate array

<!-- object literals -->

refer the main.js

<!-- JSON -->

is a data format
sued a lot in full stack developement
very similar to object literals

convert object array to json using json converter - freeconverter.com

<!-- loops -->

// For loops
for(let i=0;i <=>10; i++)
// while loops
while(i<10) {
console.log('while loop number: ${1});
i++;
}

//loop through arrays

for (let i =0; i todos.lenght; i++);
console.log(todos[i].text);
or
for(let todo of todos) {
console.log(todo.id)
}

//High order array methods
foreach
map
filter

todo.forEach(function(todo)) {
console.log(todo.text)
};
/map - returns the new array
const todoText = todos.map(function(tood) {
return todo.text;
})

/filter -
const todoText = todos.map(function(tood) {
return todo.isCompleted === true;
}).map(function(todo) {
return todo.text;
})
//check the high order function for above

<!--  -->

== - matches the value
=== - it matches the value and also mathces the datatypes.

<!-- conditional -->

if
else if
if else if

|| - or
&& - and
above operators are mainly used in nested if conditions

/Iternary operator - shorthand if statement
const x= 11
const color = x>10 ? 'red' : 'blue';
console.log(color) ;
? means then

//Switches
const x= 11
const color = x>10 ? 'red' : 'blue';

swtich(color) {
case 'red';
console.log('color is red');
break;
case 'blue'
console.log('color is blue');
break;
default:
console.log('color is not red or blue');
}

<!-- functions -->

parameters
call functions
add default valuues in the parameter.

-arrow functions -ES 2015 also ES6
const addNum = (num1,num2) => {
return num1+num2;
}
or
const addNum = (num1,num2) => num1+num2 ;

<!-- this ketword -->  (check)

<-- OOPS -->
Constrcution function with prototypes
ES6 classes
Constructor
Instantiate
prototype - these are used when instead of adding functions to every object instance, so we create diffrent prototype of that function needed.

<!-- in ES6 the OOPS is differen -->

check the above with the same example.

<!-- Classes -->

this is used for the same purpose as similar dealing with prototypes in
the above.

<!-- DOM  -->

Selecting things from the DOM

- Single element selectors
  getElementById
  querySelector - works just like jquery
- Multiple element selectors
  querySelectorAll
  getElementByClassName - it gives HTML collection, ie it does not gives array method, you have to manually convert it to an array. so only 'item'
  getELementByTagName

- window object\*\*\*

/for looping through and grabbing each of the list items.

const Item = document.querySelectorAll('.Item');
items.forEach(Item) => console.log(item);

/ for manipulating the DOm and changing the DOM

remove()
lastElementChild
firstElementChild
children[1].innerText
innerHTML = <h1>hello</h1>

// EventListener

const btn = document.querSelector('.btn');

btn.addEventListener('click', (e) => {
e.preventDefault(); / this is to prevent the default action of that event
console.log ('click');
})
in the log you can alos check for event (e) methods
e.target.class
you get all the different atributes of the event you click
