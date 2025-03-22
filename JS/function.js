function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

// print1to5();

function isAdult() {
    let age = 18;
    if(age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

// isAdult();

function printPoem() {
    console.log("Twinkle Twinkle little star");
    console.log("how I wonder what you are");
}

// printPoem();

function rollDice() {
    let dice = Math.floor( Math.random() * 6) + 1;
    console.log(dice);
}

// rollDice();

function sum(a, b) {
    console.log(a + b);
}

//sum(2, 5);

function Average (a, b, c) {
    console.log((a+b+c) / 3);
}

// Average(2, 2, 2);

function multpTable(a) {
    for(let i=1; i<=10; i++) {
        let table = a*i;
        console.log(table);
    }
}

// multpTable(19);

function getSum(n) {
    let sum = 0;
    for(let i=0; i<=n; i++) {
        sum += i;
    }
    return sum;
}

// console.log(getSum(3));

let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        result += str[i];
    }
    return result;
}

// console.log(concat(str));

// let greet = "hello";

// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }
//     innerGreet();
// }

// console.log(greet);
// changeGreet();

// let Psum = function(a, b) {
//     return a+b;
// }
// console.log(Psum(2, 3));

function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("Wrong request");
    }
}

let request = "odd";//even