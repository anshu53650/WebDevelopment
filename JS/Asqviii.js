let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add("purple");
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);