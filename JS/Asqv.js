// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// function getElement (arr, num) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }
// getElement(arr, num);

// let str = "abcdabcdefgggh";

// function getUniqueChar(str) {
//     let ans = "";
//     for(let i=0; i<str.length; i++) {
//         if(ans.indexOf(str[i]) == -1) {
//             ans += str[i];
//         }
//     }
//     return ans;
// }
// console.log(getUniqueChar(str));

// let countary = ["Australia", "Germany", "United States of America"];

// function longestName(countary) {
//     let longest = "";
//     for(let i=0; i<countary.length; i++) {
//         if(longest.length < countary[i].length ) {
//             longest = countary[i];
//         }
//     }
//     return longest;
// }
// console.log(longestName(countary));

// let str = "anshukumar";

// function countVowels(str) {
//     let count = 0;

//     for(let i=0; i<str.length; i++) {
//         if(str[i] == 'a' ||
//             str[i] == 'e' ||
//             str[i] == 'i' ||
//             str[i] == 'o' ||
//             str[i] == 'u' )  {
//                 count++;
//             }
//     }
//     return count;
// }
// console.log(countVowels(str));

// function generateRandomNum(start, end) {
//     return Math.floor(Math.random() * end - start + 1) + start;
// }
// console.log(generateRandomNum(1, 10));
