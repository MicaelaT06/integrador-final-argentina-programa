// VALIDACION DEL FORMULARIO DE CONTACTO

const form = document.querySelector("#formulario");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email2");
const commentsInput = document.querySelector("#comments");
const nameMessage = document.querySelector("#nameMessage");
const emailMessage2 = document.querySelector("#emailMessage2");
const commentsMessage = document.querySelector("#commentsMessage");
const mensajeEnviado = document.querySelector("#mensaje-enviado");

form.addEventListener("submit", (event) => {
event.preventDefault();

// Definimos una variable booleana para determinar si el formulario es válido

let valid = true;

// Validamos el campo del nombre
if (nameInput.value === "") {
    nameInput.classList.add("is-invalid");
    nameMessage.textContent = "Ups! parece que falta algo.";
    nameMessage.classList.add("invalid-feedback");
    valid = false;
} else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
    nameMessage.textContent = "Se ve bien!";
    nameMessage.classList.remove("invalid-feedback");
    nameMessage.classList.add("valid-feedback");
}

// Validamos el campo del correo electrónico
if (emailInput.value === "") {
    emailInput.classList.add("is-invalid");
    emailMessage2.textContent = "Ups! parece que falta algo.";
    emailMessage2.classList.add("invalid-feedback");
    valid = false;
} else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    emailMessage2.textContent = "El correo electrónico no es válido.";
    emailMessage2.classList.add("invalid-feedback");
    valid = false;
} else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
    emailMessage2.textContent = "Se ve bien!";
    emailMessage2.classList.remove("invalid-feedback");
    emailMessage2.classList.add("valid-feedback");
}

//Validamos el campo de los comentarios

if (commentsInput.value === "") {
    commentsInput.classList.add("is-invalid");
    commentsMessage.textContent = "Ups! parece que falta algo.";
    commentsMessage.classList.add("invalid-feedback");
    valid = false;
} else {
    commentsInput.classList.remove("is-invalid");
    commentsInput.classList.add("is-valid");
    commentsMessage.textContent = "Se ve bien!";
    commentsMessage.classList.remove("invalid-feedback");
    commentsMessage.classList.add("valid-feedback");
}

if (valid) {
    mensajeEnviado.style.display = "block";
    form.reset();
}
});

//MENSAJE DE ENVIO

if (valid) {
mensajeEnviado.style.display = "block";
mensajeEnviado.classList.add("msj-enviado"); // Agregar la clase "msj-enviado"
form.reset();
}



