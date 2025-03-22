let url = "http://universities.hipolabs.com/search?name=india";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);

    let colArr = await getColleges();
    show(colArr);
});

function show(colArr) {
    for(col of colArr) {
        console.log(col.name.state);
    }
}

async function getColleges() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}