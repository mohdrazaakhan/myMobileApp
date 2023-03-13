
let mobileData = JSON.parse(localStorage.getItem("mobileAdded"))
// console.log(mobileData)
showData(mobileData);


function showData(mobile) {
    // document.querySelector("#container").innerHTML = "";
    mobileData.forEach((el) => {
        let divtag = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.imgLink

        let h3 = document.createElement("h3")
        h3.innerText = el.brand

        let h4 = document.createElement("h4")
        h4.innerText = el.mName

        let p = document.createElement("p")
        p.innerText = el.price



        divtag.append(img, h3, h4, p)
        document.querySelector("#container").append(divtag)
    });
}

