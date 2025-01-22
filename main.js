const form = document.querySelector('form');
const email = document.getElementById("email");
const emailError = document.getElementById('error-message');

form.addEventListener("submit", e => {
    e.preventDefault();

    if(email.value === ""){
     emailError.style.display = "block";
     email.classList.add('error');
    }else{
     emailError.style.display ='none';
     email.classList.remove('error');
        alert("We will get to you soon");
    };
});
