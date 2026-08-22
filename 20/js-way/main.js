// JS Way Arrays
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md

// Musketeers
// Write a program that:
// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

let array = ['Athos', 'Porthos', 'Aramis'];
// Shows each array element using a for loop.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// Adds the "D'Artagnan" value to the array.
array.push("D'Artagnan");
// Shows each array element using the forEach() method.
array.forEach((item, i) => {
  console.log(item);
});
// Remove poor Aramis.
array.pop();
// Shows each array element using a for-of loop.
for (const element of array) {
  console.log(element);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];
console.log(values.reduce((acc, c) => acc + c, 0));

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
// const values = [3, 11, 7, 2, 9, 10];

const valuesAgain = [3, 11, 7, 2, 9, 10];
let temp = values.sort((a, b) => a - b);
const max = temp[temp.length - 1];
console.log(max);

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let usersWord = document.querySelector('input').value;
let usersWords = [];

function asksUserForWord() {
  let p = document.querySelector('p');
  p.innerText += usersWords;
}


// JS Way Objects
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
// TODO: create the character object here
let aurora = {
    health: 150,
    strength: 25,
    xp: 0,
    describe(){
        return `Aurora has ${aurora.health} health points, ${aurora.strength} as strength, and ${aurora.xp} XP points`
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe()); // 'Aurora has 130 health points, 35 as strength, and 15 XP points'


// Modeling a dog
// Complete the following program to add the dog object definition.
// TODO: create the dog object here

let dog = {
    name: 'Fang',
    species: 'boarhound',
    size: 75,
    bark(){
        return 'Grrr! Grrr!'
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));
// TODO: create the circle object here

let circle = {
    radius: r,
    area(){
        return Math.PI*Math.pow(r, 2)
    },
    circumference(){
        return 2*Math.PI*r
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);


// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

let account = {
    name: 'Alex',
    balance: 0,
    credit(n){
        account.balance += n
    },
    describe(){
        return `owner: ${account.name}, balance: ${account.balance}`
    }
}
account.describe()
account.credit(250)
account.credit(-80)
account.describe()

