// let num = 33;
// if(num % 10 == 0) {
//     console.log("Good");
// } else {
//     console.log("Bad");
// }

// let userName = prompt(`Enter User name : `);
// let age = prompt(`Enter age :`);
// alert(userName+` `+ `is`+` ` + age+` ` + `years old.`);

// let quarter = 4;
// switch(quarter) {
//     case 1:
//         console.log(`January, February, March`);
//         break;
//     case 2:
//         console.log(`April, May, June`);
//         break;
//     case 3:
//         console.log(`July, August, September`);
//         break;
//     case 4:
//         console.log(`October, November, December`);
//         break;
//     default :
//     console.log(`wrong information`);
// }

// let str = "Ayushkumar";
// if((str[0] === "A" || str[0] === "a") && str.length > 5) {
//     console.log("Golden");
// } else {
//     console.log("Not golden");
// }

// let a = 2;
// let b = 8;
// let c = 6;
// if(a > b) {
//     if(a > c) {
//         console.log(a, `is largest`);
//     }else {
//         console.log(c, `is largest`);
//     }
// } else {
//     if(b > c) {
//         console.log(b, `is largest`);
//     }else {
//         console.log(c, `is largest`);
//     }
// }

let num1 = 32;
let num2 = 47852;
if((num1 % 10) == (num2 % 10)) {
    console.log(`same last digit = `+num1 % 10);
} else {
    console.log(`not same last digit`);
}