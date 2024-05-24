console.log(3 / 2);     // 1.5, not 1
console.log(0.1 + 0.2); // 0.30000000000000004, not 0.3

// 503 in decimal 
// is 111110111 in binary, 
// 767 in octal, and 
// 1f7 in hexadecimal

console.log(0b111110111);   
console.log(0o767);         
console.log(0x1f7); 
console.log(5.03e2);  // exponential notation, same as 5.03 * 10^2 or 503

console.log(-3n / 2n); // -1n  - bigint division

Math.sin(3.5);
const circumference = 2 * Math.PI * r;   // Math.PI is a constant

console.log("Hello, world");
console.log("Hello"[1] === "e");    // true - strings can be treated like arrays

const age = 25;
console.log("I am " + age + " years old."); // String concatenation 
console.log(`I am ${age} years old.`); // Template literal - string interpolation

Boolean(""); // false - falsy value
Boolean(234); // true

// false values: 0, -0, null, false, NaN, undefined, and "" (empty string)



let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here


const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
Pi = 1; // Attempting to reassign value to Pi throws error


const obj = {};
obj.a = 1;     // mutation is allowed, which means you can change the properties of a constant object
console.log(obj); // { a: 1 }

// var declarations are globally scoped or function/locally scoped
// var variables can be updated and re-declared within its scope
// var can have suprising behavior when used in loops



function foo(x, condition) {
    if (condition) {
      console.log(x);      // ReferenceError: Cannot access 'x' before initialization means that the variable was accessed before it was declared
      const x = 2;          // this is block scoped to the if statement
      console.log(x);       // this will work
    }
  }

foo(1, true);             // this is not initialization, it's assignment


x += 5;   
x = x + 5;   // same as above

"hello" + " world";           // str concatenation


"3" + 4 + 5; // "345" - string concatenation
3 + 4 + "5"; // "75" - converts 3 + 4 to 7, then concatenates with "5"


123 == "123";       // true because of type coercion which is the process of converting value from one type to another
1 == true;          // true

123 === "123";      // false - strict equality operator
1 === true;         // false

const c = 0 && "Hello";         // 0 because 0 is "falsy"
const d = "Hello" || "world";       // "Hello" because both "Hello" and "world" are "truthy"


let pet_name = "kittens";

if (pet_name === "puppies") {
    pet_name += " woof";
} else if (pet_name === "kittens") {
    pet_name += " meow";
} else {
    pet_name += "!";
}
pet_name === "kittens meow";


while (true) {
    // an infinite loop!
}

let input;
do {
    input = get_input();
} while (inputIsNotValid(input));


for (let i = 0; i < 5; i++) {    // i is block scoped
    // Will execute 5 times
}



for (const value of array) {    // for-of loop, used to iterate over arrays
    // do something with value
}
  
for (const property in object) {     // for-in loop, used to iterate over object properties, like keys
    // do something with object property
}


switch (action) {       // switch statement, used to perform different actions based on different conditions
    case "draw":
      drawIt();
      break;        // break statement is used to exit the switch statement
    case "eat":
      eatIt();
      break;
    default:
      doNothing();

}


// errors are handled by the try...catch statement
try {
    buildMySite("./website");
  } catch (e) {
    console.error("Building site failed:", e);
}

function buildMySite(siteDirectory) {
    if (!pathExists(siteDirectory)) {
      throw new Error("Site directory does not exist");
    }
}




try {
    buildMySite("./website");
  } catch (e) {
    if (e instanceof RangeError) {      // instanceof operator is used to check the type of an object at run time
      console.error("Seems like a parameter is out of range:", e);
      console.log("Retrying...");
      buildMySite("./website");
    } else {
      // Don't know how to handle other error types; throw them so
      // something else up in the call stack may catch and handle it
      throw e;
    }
}



const obj = {       // object literal
    name: "Carrot",
    for: "Max",
    details: {
      color: "orange",
      size: 12,
    },
};

// Dot notation is used to access properties of an object
obj.name = "Simon";
const testname = obj.name;

// Bracket notation is used to access properties of an object
obj["name"] = "Simon";
const test_name = obj["name"];

// Can use a variable to define a key
const userName = prompt("what is your key?");
obj[userName] = prompt("what is its value?");


// Accessing nested properties, can be chained
obj.details.color; // orange
obj["details"]["size"]; // 12



const f = ["dog", "cat", "hen"];
f.length; // 3


const h = ["dog", "cat", "hen"];
h[100] = "fox";
console.log(h.length); // 101
console.log(h); // ['dog', 'cat', 'hen', empty × 97, 'fox']


function add(x, y) {        // function declaration
    const total = x + y;
    return total;
}

add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored, passing extra arguments is allowed


function avg(...args) {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  }
  
avg(2, 3, 4, 5); // 3.5


// Note the { } braces: this is destructuring an object
function area({ width, height }) {
    return width * height;
}

// The { } braces here create a new object, and the function is called with that object
  
// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));


function avg(firstValue, secondValue, thirdValue = 0) {
    return (firstValue + secondValue + thirdValue) / 3;
}
  
avg(1, 2); // 1, instead of NaN, because thirdValue is set to 0 if not passed


// Note that there's no function name before the parentheses, anonymous function
const avg = function (...args) {
    let sum = 0;        // function expression
    for (const item of args) {
      sum += item;      
    }
    return sum / args.length;
};

// its equivalent to the function declaration below
// we can use arrow functions to make it more concise
// it can be simultaneously declared and invoked in a single expression 
// IIFE (Immediately Invoked Function Expression)

const avg = (...args) => {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
};
  
// You can omit the `return` when simply returning an expression
const sum = (a, b, c) => a + b + c;


function countChars(elm) { // elm is a parameter

    if (elm.nodeType === 3) {   // nodeType is a property of the Node interface
      return elm.nodeValue.length;      // nodeValue is a property of the Node interface
    }

    let count = 0;
    for (let i = 0, child; (child = elm.childNodes[i]); i++) {      // childNodes is a property of the Node interface, returns a NodeList of child nodes of the given element
      count += countChars(child);                   // recursion by calling the function itself
    }
    return count;
}


const charsInBody = (function counter(elm) {
    if (elm.nodeType === 3) {
      return elm.nodeValue.length;
    }
    let count = 0;
    for (let i = 0, child; (child = elm.childNodes[i]); i++) {
      count += counter(child);   // recursion by calling the function itself
    }
    return count;
})(document.body);


// Function returning function
const add = (x) => (y) => x + y;    // this is a curried function, which means it returns another function
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// the function is passed as an argument to the map function



function parentFunc() {
    const a = 1;
  
    function nestedFunc() {
      const b = 4;  // parentFunc can't use this
      return a + b;
    }

    return nestedFunc(); // 5
    // but nestedfunc can use a
}


class Person {

    constructor(name) {
      this.name = name;
    }

    sayHello() {
      return `Hello, I'm ${this.name}!`;
    }

}
  
const p = new Person("Maria");
console.log(p.sayHello());



const withAuthentication = (cls) =>     // cls is a parameter, which is a class
    class extends cls {                 // higher order class means a class that returns another class (or a function that returns a class)
      authenticate() {
        // …
      }

    };
  
class Admin extends withAuthentication(Person) {     // Person is a class, which is passed as an argument
    // …                                               // extends is used to create a class that is a child of another class
                                            // withAuthentication is a higher-order class that adds authentication to a class
    
}