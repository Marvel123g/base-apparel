const form = document.querySelector('form');
const email = document.getElementById("email");
const emailError = document.getElementById('error-message');

form.addEventListener("submit", e => {
    e.preventDefault();

    if(email.innerText == ""){
        emailError.style.display = "block";
        email.classList.add("error");
    } else if (email.innerText != ""){
        alert('correct');
        emailError.style.display = "none";
    }
});
