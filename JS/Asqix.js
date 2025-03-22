// let inp = document.querySelector("input");
// let btn = document.querySelector("button");

// inp.addEventListener("mouseout", function(event) {
//     console.log("key =", event.key);
//     console.log("code =", event.code);
//     console.log("mouse is out");
// });

// btn.addEventListener("keypress", function(event) {
//     event.preventDefault;
//     alert("key is pressed");
//     console.log("key is pressed");
// });


// let btn = document.createElement("button");
// btn.innerText = "Click Me!";
// document.querySelector("body").append(btn);
// btn.addEventListener("click", function() {
//     btn.classList.add("style");
// });

let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function() {
    console.log(inp.value);
    console.dir(inp);
    h2.innerText = inp.value;
});