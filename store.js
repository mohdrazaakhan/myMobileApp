
document.querySelector("form").addEventListener('submit', addMobile);

let mobileArr = JSON.parse(localStorage.getItem('mobileAdded')) || [];

function addMobile(event) {
    event.preventDefault();
    let mobileObj = {
        brand: document.querySelector("#Bname").value,
        mName: document.querySelector("#Mname").value,
        price: document.querySelector("#price").value,
        imgLink: document.querySelector('#image').value

    };
    mobileArr.push(mobileObj)
    localStorage.setItem('mobileAdded', JSON.stringify(mobileArr))
    alert("Your Details has been submitted successfuly")
    window.location.reload();
}

