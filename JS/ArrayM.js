// let arr = [1, 2, 3, 4, 5];

// arr.forEach((ele) => {
//     console.log(ele);
// });

// let students = [{
//     name: "anshu",
//     marks: 95,
// }, 
// {
//     name: "ayush",
//     marks: 96,
// }, 
// {
//     name: "ritik",
//     marks: 80,
// }];

// let gpa = students.map((el) => {
//     return el.marks / 10;
// });

// arr.forEach((students) => {
//     console.log(students.marks);
// });


// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//     return el * el;
// });


// let nums = [2, 3, 1, 4, 7, 6, 10, 8];

// let ans = nums.filter((el) => {
//     return el%2 == 0;
// });


// let nums = [1, 2, 3, 4];

// let finalVal = nums.reduce((res, el) => {
//     // console.log(res);
//     return res+el
// });
// console.log(finalVal);


// let nums = [10, 20, 30, 40];
// let ans = nums.every((el) => el%10 == 0);
// console.log(ans);


// let nums = [2, 3, 4, 7, 9, 10, 1, 5];
// let result = nums.reduce((min, el) => {
//     if(min > el) {
//         return el;
//     } else {
//         return min;
//     }
// });
// console.log(result);


let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...even, ...odd];