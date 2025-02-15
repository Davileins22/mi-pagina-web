// Manejo del formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Mostrar un mensaje de éxito
    document.getElementById('respuesta').innerHTML = "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.";

    // Limpiar el formulario
    document.getElementById('form-contacto').reset();
});
