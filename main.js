const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const about = document.querySelector("#about");
const btn = document.querySelector("#submit-btn");

form.addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    if(name.value == "" || email.value == "" || about.value == "") {
        alert("Please enter all fields");
    } else {
        alert(`
        Name: ${name.value}
        Email: ${email.value}
        Message: ${about.value}
        `);
        name.value = "";
        email.value = "";
        about.value = "";
    }
}