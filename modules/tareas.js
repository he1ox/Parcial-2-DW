// tareas.js

// Lista de tareas
const listaDeTareas = [];

// Función para agregar una tarea
function agregarTarea(tarea) {
  listaDeTareas.push({ tarea, completada: false });
}

// Función para marcar una tarea como completada
function marcarComoCompletada(indice) {
  if (indice >= 0 && indice < listaDeTareas.length) {
    listaDeTareas[indice].completada = true;
  }
}

// Función para mostrar la lista de tareas
function mostrarTareas() {
  console.log("Lista de Tareas:");
  listaDeTareas.forEach((tarea, indice) => {
    const estado = tarea.completada ? "Completada" : "Pendiente";
    console.log(`${indice + 1}. ${tarea.tarea} - ${estado}`);
  });
}

// Exporta las funciones para que estén disponibles para otros módulos
export { agregarTarea, marcarComoCompletada, mostrarTareas };
