// Obtén el formulario por su ID o cualquier otro selector
const formulario = document.getElementById('nombre-del-formulario');

// Agrega un event listener al evento "submit" del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
  // Aquí puedes realizar cualquier acción adicional que desees al enviar el formulario

  // Ejemplo: Mostrar un mensaje de éxito
  alert('Formulario enviado con éxito');
});
