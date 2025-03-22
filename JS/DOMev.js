// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function() {
//     //     console.log("you entered a button");
//     // }

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);

//     // btn.addEventListener("dblclick", function() {
//     //     console.log("you double clicked")
//     // })

//     console.dir(btn);
// }

// function sayHello() {
//     alert("Hello!");
// }
// function sayName() {
//     alert("Apna College");
// }

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomcolor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomcolor() {
    let red =Math.floor(Math.random() * 255);
    let green =Math.floor(Math.random() * 255);
    let blue =Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}