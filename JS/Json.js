// let jsonRes =
// '{"fact":"A cat usually has about 12 whiskers on each side of its face.","length":61}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);


// let student = {
//     name: "Anshu",
//     marks: 90,
// };


let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR -", err);
// });

// console.log("hello!");


async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (e) {
        console.log("err - ", e);
    }
    
    console.log("bye");
}