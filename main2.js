const form = document.querySelector("#form");
const email = document.querySelector("#email");
const radiobtn = document.querySelector(".radio-btn");
const btn = document.querySelector("#submit-btn");

form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    if(email.value == "" || radiobtn.value == "") {
        alert("Please enter all fields");
    } else {
        alert(`
        Email: ${email.value}
        Recieve Updates: ${radiobtn.value}
        `);
        email.value = "";
        radiobtn.value = "";
    }
}