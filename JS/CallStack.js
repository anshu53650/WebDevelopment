let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was completed");
})

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// };

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });


// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("success : your data was saved");
//     savetoDb("hello world", () => {
//         console.log("success2 : data2 saved");
//         savetoDb("anshu", () => {
//             console.log("success3 : data3 saved");
//         }, () => {
//             console.log("failure3 : weak connection");
//         })
//     },() => {
//         console.log("failure2 : weak connection");
//     })
// },
// () => {
//     console.log("failure : weak connection");
// })


// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10 ) + 1;
//         if(internetSpeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("failure : weak connection");
//         }
//     });
// }

// savetoDb("apna college")
// .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise : ", result);
//     return savetoDb("hello world");
// })
// .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise : ", result);
//     return savetoDb("anshu");
// })
// .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise : ", result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise : ", error);
// })