// Función para calcular la nota final promedio
function calcularNotaFinal(sumaNotas, cantidadNotas) {
    return sumaNotas / cantidadNotas;
  }
  
  // Variable para almacenar la cantidad de alumnos
  let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos:'));
  
  // Bucle para calcular la nota final de cada alumno
  for (let i = 1; i <= cantidadAlumnos; i++) {
    let nombre = prompt('Ingrese el nombre del alumno ' + i + ':');
    let cantidadNotas = parseInt(prompt('Ingrese la cantidad de notas del alumno ' + i + ':'));
    let sumaNotas = 0;
  
    // Bucle para ingresar y sumar las notas
    for (let j = 1; j <= cantidadNotas; j++) {
      let nota = parseFloat(prompt('Ingrese la nota ' + j + ' del alumno ' + i + ':'));
      sumaNotas += nota;
    }
  
    // Calcular la nota final utilizando la función calcularNotaFinal
    let notaFinal = calcularNotaFinal(sumaNotas, cantidadNotas);

    // Mostrar la nota final del alumno
    console.log('El alumno ' + nombre + ' tiene una nota final de ' + notaFinal.toFixed(2));

    // Verificar si la notaFinal es mayor a 7 el alumno aprobo
    if (notaFinal >= 7)  {
        console.log("Aprobado");
        } else {
        console.log("Desaprobado");
        }
  }