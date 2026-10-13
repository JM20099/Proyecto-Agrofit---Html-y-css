// -------------------------------------------------------------
// FUNCIÓN 1: Controla la visibilidad de las fechas según el Radio seleccionado
// -------------------------------------------------------------
function toggleCamposContrato() {
  // Busca el radio button que esté actualmente seleccionado
  const radioSeleccionado = document.querySelector('input[name="tipoContrato"]:checked');
  
  // Busca la sección que contiene las fechas y el número de contrato
  const seccionContrato = document.getElementById('seccionContrato');

  // Verifica que ambos elementos existan para evitar errores
  if (radioSeleccionado && seccionContrato) {
    
    // Si la opción seleccionada es 'contrato', muestra la sección
    if (radioSeleccionado.value === 'contrato') {
      seccionContrato.style.display = 'block';
    } else {
      // Si la opción es 'planta', oculta las fechas y número de contrato
      seccionContrato.style.display = 'none';
    }
  }
}


// -------------------------------------------------------------
// EVENTO PRINCIPAL: Se ejecuta cuando la página termina de cargar
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // Selecciona los 3 botones de rol (Entrenador, Funcionario y Aprendiz)
  const botonesRol = document.querySelectorAll('.registro__botton, .registro__aprendiz');
  
  // Captura el contenedor del select "Tipo de Contrato"
  const grupoTipoContrato = document.getElementById('grupoTipoContrato');
  
  // Captura el bloque con las fechas de inicio/fin y número de contrato
  const seccionContrato = document.getElementById('seccionContrato');
  
  // Captura el campo del Número de Ficha
  const seccionFicha = document.getElementById('seccionFicha');
  
  // Captura el campo de Dependencia
  const seccionDependencia = document.getElementById('seccionDependencia');

  const seccionPassword = document.getElementById('seccionPassword');

  const seccionCentrodeFormacion = document.getElementById('seccionCentrodeFormacion');

  // Recorre cada uno de los botones para asignarles la acción al hacer clic
  botonesRol.forEach(boton => {
    boton.addEventListener('click', () => {

      // Limpia el color de fondo de todos los botones dejándolos blancos
      botonesRol.forEach(btn => btn.style.backgroundColor = 'white');
      
      // Resalta únicamente el botón que el usuario acaba de presionar (verde claro)
      boton.style.backgroundColor = 'rgb(210, 241, 210)';

      // Obtiene el texto del botón presionado y lo convierte a minúsculas
      const textoRol = boton.textContent.trim().toLowerCase();

      // EVALUACIÓN DE CASOS:
      if (textoRol === 'aprendiz') {
        // CASO 1: Si es Aprendiz...
        if (grupoTipoContrato) grupoTipoContrato.style.display = 'none';   // Oculta el Select de Contrato
        if (seccionContrato) seccionContrato.style.display = 'none';      // Oculta las Fechas de Contrato
        if (seccionDependencia) seccionDependencia.style.display = 'none'; // Oculta el campo Dependencia
        if (seccionFicha) seccionFicha.style.display = 'block';           // Muestra el campo Número de Ficha
        if (seccionPassword) seccionPassword.style.display = 'block';
        if (seccionCentrodeFormacion) seccionCentrodeFormacion.style.display = 'none';
      } else {
        // CASO 2: Si es Entrenador o Funcionario...
        if (grupoTipoContrato) grupoTipoContrato.style.display = 'block';   // Muestra el Select de Contrato
        if (seccionDependencia) seccionDependencia.style.display = 'block'; // Muestra el campo Dependencia
        if (seccionFicha) seccionFicha.style.display = 'none';             // Oculta el campo Número de Ficha
        if (seccionPassword) seccionPassword.style.display = 'block';
        if (seccionCentrodeFormacion) seccionCentrodeFormacion.style.display = 'block';

        // Ejecuta la función para validar si el Select está en "Contrato" o "Planta"
        toggleCamposContrato();
      }   
    });
  });

  // Ejecución inicial para asegurar el estado correcto al cargar el formulario
  toggleCamposContrato();
});