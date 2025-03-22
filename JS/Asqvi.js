
// const arrAvg = (arr) => {
//     let toatl = 0;
//     for(let number of arr) {
//         toatl += number;
//     }
//     return toatl/arr.length;
// };

// let arr = [1, 2, 3, 4, 5];
// console.log(arrAvg(arr));


// const isEven = (n) => n%2 == 0;


// const object = {
//     message: "Hello World!",
    
//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);


let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
    }
};
object.method(callback, 1, 2);