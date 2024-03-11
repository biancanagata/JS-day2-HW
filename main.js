//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function FavoriteFoods(food) {
   
    for (let i = 0; i < Object.keys(food).length; i++) {
        console.log(Object.keys(food)[i]);
    }

    
   
    for (let i = 0; i < Object.keys(food).length; i++) {
        if (Array.isArray(Object.values(food)[i])) {
            console.log(Object.values(food)[i]);
        }
    }
}

FavoriteFoods(person3);







//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = function (gender, nationality) {
        console.log(`Name: ${this.name} \nAge: ${this.age} \nGender: ${gender} \nNationality: ${nationality}`);
    };

    this.addAge = () => {
        this.age++;
    };
}


let person1 = new Person('Amanda', 34);
person1.printInfo('Female', 'American');

let person2 = new Person('Caio', 30);
person2.printInfo('Male', 'British');

person1.addAge();
person1.addAge();
person1.addAge();

console.log("After adding age:");
person1.printInfo('Female', 'American');




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function StringLength(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

StringLength("Californian")
.then( (result) => {
    console.log("Big word")
})

.catch( (error) =>{
    console.log("Small Number")
})





// ============= CODEWARS EXERCISES =============//
// 1- Multiply the number (Previously done with python)
/* Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)

*/
console.log("CODEWARS EXERCISES")
function multiply(number) {
    if (number === 0) {
        return 0;
    }
    
    let numDigits = number.toString().length;
    if (number < 0) {
        numDigits--;
    }
    
    let result = number;
    for (let i = 0; i < numDigits; i++) {
        result *= 5;
    }
    
    return result;
}

console.log(multiply(3));   
console.log(multiply(10)); 
console.log(multiply(200)); 
console.log(multiply(0));   
console.log(multiply(-3));

//2- Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: 

function logs(x , a, b){
    return Math.log(a * b) / Math.log(x);
}

console.log(logs(10, 100, 1000));
