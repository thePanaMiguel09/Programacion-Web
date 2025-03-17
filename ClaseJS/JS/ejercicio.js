let notas = []; // Lista de notas
let continuar = true;

// Agregar nota
const agregarNota = () => {
  let nota = parseFloat(prompt("Ingresa la nota (0-5) o escribe 'salir' para terminar:"));

  if (isNaN(nota)) {
    alert("Entrada no válida. Ingresa un número entre 0 y 5.");
    return;
  }

  if (nota >= 0 && nota <= 5) {
    let score = parseFloat(nota.toFixed(2)); 
    notas.push(score);
    alert(`Nota ${score} agregada.`);
  } else {
    alert("La nota debe estar entre 0 y 5.");
  }
};

// Encontrar el índice de la nota
const findIndex = (nota) => {
  return notas.findIndex(n => n === nota);
};

// Eliminar una nota
const deleteNota = () => {
  if (notas.length === 0) {
    alert("No hay notas para eliminar.");
    return;
  }

  let nota = parseFloat(prompt("Ingresa la nota que deseas eliminar:"));
  let indexNota = findIndex(nota);

  if (indexNota !== -1) {
    notas.splice(indexNota, 1); // Eliminamos la nota
    alert(`Nota ${nota} eliminada.`);
  } else {
    alert("Nota no encontrada.");
  }
};

// Modificar una nota
const upDateNota = () => {
  if (notas.length === 0) {
    alert("No hay notas para modificar.");
    return;
  }

  let nota = parseFloat(prompt("Ingresa la nota que deseas modificar:"));
  let indexNota = findIndex(nota);

  if (indexNota !== -1) {
    let nuevaNota = parseFloat(prompt("Ingresa la nueva nota (0-5):"));
    if (nuevaNota >= 0 && nuevaNota <= 5) {
      notas[indexNota] = parseFloat(nuevaNota.toFixed(2));
      alert(`Nota actualizada a ${nuevaNota}`);
    } else {
      alert("La nueva nota debe estar entre 0 y 5.");
    }
  } else {
    alert("Nota no encontrada.");
  }
};

// Calcular promedio
const calcularPromedio = () => {
  if (notas.length === 0) {
    return 0;
  }
  return (notas.reduce((total, nota) => total + nota, 0) / notas.length).toFixed(2);
};

// Bucle principal
do {
  let option = prompt("Ingresa:\nA para agregar\nD para eliminar\nU para modificar\nS para salir").toUpperCase();

  switch (option) {
    case "A":
      agregarNota();
      break;
    case "D":
      deleteNota();
      break;
    case "U":
      upDateNota();
      break;
    case "S":
      continuar = false;
      break;
    default:
      alert("Opción no válida.");
  }

  // Mostrar promedio después de cada acción
  if (notas.length > 0) {
    alert(`Notas actuales: ${notas.join(", ")}`);
    alert(`Promedio del curso: ${calcularPromedio()}`);
  }

} while (continuar);

alert("Programa finalizado.");
