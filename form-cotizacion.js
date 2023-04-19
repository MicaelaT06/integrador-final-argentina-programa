// Obtener los elementos del DOM
const form = document.getElementById('cotizacion-form');
const comboSelect = document.getElementById('combo');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const empresaInput = document.getElementById('empresa');
const pagoSelect = document.getElementById('pago');
const terminosCheck = document.getElementById('terminos');
const totalBuyDiv = document.getElementById('totalBuy');
const exitoDiv = document.getElementById('mensaje-exito');

// Precios de los combos
const preciosCombos = {
combo1: 20000,
combo2: 40000,
combo3: 50000
};

// validar el formulario
function validarFormulario(event) {
  // Evitar el envío automático del formulario
event.preventDefault();

  // Verificar los campos estén llenos
if (comboSelect.value === '' || nombreInput.value === '' || emailInput.value === '' || empresaInput.value === '' || pagoSelect.value === '' || !terminosCheck.checked) {
    // Si falta algún campo, poner un borde rojo en cada campo incorrecto
    if (comboSelect.value === '') {
    comboSelect.classList.add('border', 'border-danger');
    }
    if (nombreInput.value === '') {
    nombreInput.classList.add('border', 'border-danger');
    }
    if (emailInput.value === '') {
    emailInput.classList.add('border', 'border-danger');
    }
    if (empresaInput.value === '') {
    empresaInput.classList.add('border', 'border-danger');
    }
    if (pagoSelect.value === '') {
    pagoSelect.classList.add('border', 'border-danger');
    }
    if (!terminosCheck.checked) {
    terminosCheck.classList.add('border', 'border-danger');
    }
} else {
    // Si la validacion es correcta, generar un resumen de precio total y mostrar el mensaje de envio
    const precioCombo = preciosCombos[comboSelect.value];
    totalBuyDiv.textContent = `Resumen: $${precioCombo} (${comboSelect.options[comboSelect.selectedIndex].text})`;
    exitoDiv.style.display = 'block';
}
}

// Event listener para el envío del formulario
form.addEventListener('submit', validarFormulario);

// Event listeners para sacar el borde rojo cuando se llena el campo
comboSelect.addEventListener('input', () => {
comboSelect.classList.remove('border', 'border-danger');
});
nombreInput.addEventListener('input', () => {
nombreInput.classList.remove('border', 'border-danger');
});
emailInput.addEventListener('input', () => {
emailInput.classList.remove('border', 'border-danger');
});
empresaInput.addEventListener('input', () => {
empresaInput.classList.remove('border', 'border-danger');
});
pagoSelect.addEventListener('input', () => {
pagoSelect.classList.remove('border', 'border-danger');
});
terminosCheck.addEventListener('input', () => {
terminosCheck.classList.remove('border', 'border-danger');
});
