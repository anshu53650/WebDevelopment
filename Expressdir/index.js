const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello, I am root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlstr = `<h1>welcome to the page of @${username}.</h1>`;
    res.send(htmlstr);
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(`<h1>search result for query: ${q}</h1>`);
})
// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("this path doesn't exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

// app.use((req, res) => {
//     console.log("request received");

//     let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>orange</li></ul>";
//     res.send(code);
// });