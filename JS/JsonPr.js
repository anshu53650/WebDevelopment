let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    
    show(colArr);
});

function show(colArr) {
    // let list = document.querySelector("ul");
    // list.innerText = "";

    for(col of colArr) {
        console.log(col.name);
    }

    // let l = document.createElement("li");
    // l.innerText = col.name;
    // list.appendChild(l);
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch(e) {
        console.log("error : ", e);
        return[];
    }
}