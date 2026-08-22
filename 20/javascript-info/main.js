// Javascript.info Array methods tasks

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. That is: removes all dashes, each word after dash becomes uppercased.

const camelize = (str) => {
  return str
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
};

console.log(camelize('background-color') == 'backgroundColor');
console.log(camelize('list-style-image') == 'listStyleImage');
console.log(camelize('-webkit-transition') == 'WebkitTransition');

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. The function should not modify the array. It should return the new array.

const filterRange = (arr, a, b) => arr.filter((item) => item >= a && item <= b);

console.log(filterRange([5, 3, 8, 1], 1, 4));

/* Filter range "in place" Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

const filterRangeInPlace = (arr, a, b) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}


// Sort in decreasing order
const sortDecrease = arr => arr.sort((a,b)=>b-a)

console.log(sortDecrease([5, 2, 1, -10, 8]));



// Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified. Create a function copySorted(arr) that returns such a copy.

const copySorted = arr => arr.sort()

console.log("copy sorted:", copySorted(["HTML", "JavaScript", "CSS"]))


// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

function Calculator(){
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str){
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
      if(!this.methods[op] || isNaN(a) || isNaN(b)){
        return NaN;
      }
      return this.methods[op](a, b);
    };
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }


// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john,pete,mary];
let names = users.map(item => item.name);
alert(names);


// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));


// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

const sortByAge = arr => arr.sort((a, b) => a.age - b.age);


// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

const shuffle = array => array.sort(() => Math.random() - 0.5);

// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

function getAverageAge(users){
    let average = users.reduce((acc,c)=>acc+c.age,0) / users.length
    return average
}
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 29 };

let arrayOfPeople = [ john2, pete2, mary2 ];
getAverageAge(arr) // 22 --> Correct


// Filter unique array members
// importance: 4
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

const unique = arr => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}


// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

const groupById = arr => {
    return arr.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }