// const classInfo = [
//     {
//         name: "anshu",
//         grade: "A+",
//         city: "Bihar"
//     },
//     {
//         name:"ritik",
//         grade: "A",
//         city: "Bhopal"
//     },
//     {
//         name: "ayush",
//         grade: "O",
//         city: "Delhi"
//     }
// ]

//Guessing Game

const max = prompt("enter the number");

const random = Math.floor( Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you are right! congrats!! random number was ", random);
        break;
    }
    else if (guess < random) {
        guess = prompt("hint : your guess was too small. please try again");
    }
    else {
        guess = prompt("hint : your guess was too large. please try again");
    }
}