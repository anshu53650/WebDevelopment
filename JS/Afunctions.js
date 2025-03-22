// const student = {
//     name: "anshu",
//     age: 20,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// try {
//     console.log(a);
// } catch {
//     console.log("a is not defined");
// }

// const sum = (a, b) => {
//     console.log(a+b);
// }

// const mul = (a, b) => (a*b);

// console.log("Hi there!");
// setTimeout ( () => {
//     console.log("Apna College");
// }, 4000);
// console.log("Welcome to");

// let id = setInterval( () => {
//     console.log("Hello World!");
// }, 2000);

// console.log(id);


// const student = {
//     name: "anshu",
//     marks: 95,
//     prop: this,//global scope
//     getName:function() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.marks;//parent's scope -> Window
//     },
//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this);//student
//         }, 2000 );
//     },
//     getInfo2: function() {
//         setTimeout(function () {
//             console.log(this);//window
//         }, 2000);
//     }
// }

// const square = (n) => n*n;
// console.log(square(5));

let id = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);