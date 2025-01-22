const form = document.querySelector('form');
const email = document.getElementById("email");
const emailError = document.getElementById('error-message');

form.addEventListener("submit", e => {
    e.preventDefault();

    if(email.textContent === ""){
        console.log('input a value');
        // emailError.style.display = "block";
        // email.classList.add("error");
    }else{
        console.log('correct')
    };
    // if (email.innerText != ""){
    //     console.log("correct");
    //     emailError.style.display = "none";
    // }
});
