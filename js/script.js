// Esperamos a que todo el HTML esté cargado antes de buscar elementos
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('formContacto');
  if (!form) return; // si esta página no tiene el formulario, no hace nada

  form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // evita que la página se recargue

    let esValido = true; // bandera: si algo falla, se vuelve false

    // --- Validar nombre (mínimo 3 caracteres) ---
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('errorNombre');
    if (nombre.length < 3) {
      errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
      esValido = false;
    } else {
      errorNombre.textContent = '';
    }

    // --- Validar email con una expresión regular simple ---
    const email = document.getElementById('email').value.trim();
    const errorEmail = document.getElementById('errorEmail');
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronEmail.test(email)) {
      errorEmail.textContent = 'Ingresa un correo válido (ejemplo: nombre@correo.com).';
      esValido = false;
    } else {
      errorEmail.textContent = '';
    }

    // --- Validar mensaje (mínimo 20 caracteres) ---
    const mensaje = document.getElementById('mensaje').value.trim();
    const errorMensaje = document.getElementById('errorMensaje');
    if (mensaje.length < 20) {
      errorMensaje.textContent = 'El mensaje debe tener al menos 20 caracteres.';
      esValido = false;
    } else {
      errorMensaje.textContent = '';
    }

    // --- Validar select ---
    const servicio = document.getElementById('servicio').value;
    const errorServicio = document.getElementById('errorServicio');
    if (servicio === '') {
      errorServicio.textContent = 'Selecciona un servicio.';
      esValido = false;
    } else {
      errorServicio.textContent = '';
    }

    // --- Validar checkbox obligatorio ---
    const terminos = document.getElementById('terminos').checked;
    const errorTerminos = document.getElementById('errorTerminos');
    if (!terminos) {
      errorTerminos.textContent = 'Debes aceptar el tratamiento de datos.';
      esValido = false;
    } else {
      errorTerminos.textContent = '';
    }

    // --- Mostrar mensaje final sin usar alert() ---
    const mensajeForm = document.getElementById('mensajeForm');
    mensajeForm.classList.remove('d-none', 'alert-success', 'alert-danger');

    if (esValido) {
      mensajeForm.classList.add('alert-success');
      mensajeForm.textContent = '¡Mensaje enviado correctamente! Pronto te contactaremos.';
      form.reset();
    } else {
      mensajeForm.classList.add('alert-danger');
      mensajeForm.textContent = 'Revisa los campos marcados en rojo.';
    }
  });
});