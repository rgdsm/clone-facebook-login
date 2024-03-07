let inputs = document.querySelector(".inputs")
let loginButton = document.querySelector(".loginButton")
let formEmail = document.querySelector("#emailInput")
let passwordInput = document.querySelector("#passwordInput")

loginButton.addEventListener("click", function(event){
    formEmailValue = formEmail.value;
    passwordInputValue = passwordInput.value

    if(formEmailValue.trim() == "" || passwordInputValue.trim()==""){
        window.location.href = "error.html"
    } 

})