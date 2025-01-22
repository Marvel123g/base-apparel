const form = document.querySelector('form');
const email = document.getElementById("email");
const emailError = document.getElementById('error-message');
const emailValue = email.value.trim();
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", e => {
    e.preventDefault();

    // if(email.textContent === ""){
    //     console.log('input a value');
        // emailError.style.display = "block";
        // email.classList.add("error");
    // }else{
    //     console.log('correct')
    // };
    // if (email.innerText != ""){
    //     console.log("correct");
    //     emailError.style.display = "none";
    // }

    if(!emailValue || !emailRegex.test(emailValue)){
        emailError.style.display= 'block';
        email.classList.add('error');
    } else{
        emailError.style.display = "none";
        email.classList.remove('error');
        alert('Your Email has be submitted')
    };
});
