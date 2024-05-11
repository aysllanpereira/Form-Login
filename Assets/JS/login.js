// pegando os campos do html
let email = document.getElementById("email");
let password = document.getElementById("pwd");
let form = document.querySelector("form");
let textEmail = document.getElementById("textEmail");
let textPassword = document.getElementById("textPassword");
let textForm = document.getElementById("textForm");


// validação do formulário
form.addEventListener("submit", (e) => {
    // impede que o formulário seja enviado
    e.preventDefault();
    // verifica se é vazio
    if(email.value == "" && password.value == "") {
        textForm.textContent = `Preencha todos os campos`
    } else if(validateEmail(email.value) === true & validatePassword(password.value) === true){
        console.log(email.value)
        console.log(password.value)
        textForm.textContent = "";
        textEmail.textContent = "";
        textPassword.textContent = "";
    } else {
        console.log(`Não deu certo`);
    }
})

// validação do email
email.addEventListener("keyup", () => {
    if(validateEmail(email.value) !== true) {
        textEmail.textContent = `O e-mail deve ser no formato: validar@email.com`;
    } else {
        textEmail.textContent = "";
    }
})

function validateEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-}+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

// validação da senha
password.addEventListener("keyup", () => {
    if(validatePassword(password.value) !== true) {
        textPassword.textContent = `A senha deve conter no minimo 6 caracteres`;
    } else {
        textPassword.textContent = "";
    }
})

function validatePassword(password) {
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
}