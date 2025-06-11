const form = document.querySelector("#form");
const email = document.querySelector("#email");
const btn = document.querySelector("#submit-btn");

form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  const selectedRadio = document.querySelector(
    'input[name="receive_updates"]:checked'
  );
  if (email.value == "" || !selectedRadio) {
    alert("Please enter all fields");
  } else {
    alert(`
        Email: ${email.value}
        Recieve Updates: ${selectedRadio.value}
        `);
    email.value = "";
    selectedRadio.checked = false;
  }
}
