class VistaTareas {
    mostrarTareas(tareas) {
        const listaTareas = document.getElementById('listaTareas');
        listaTareas.innerHTML = ''; // Limpiar la lista antes de actualizarla

        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            const li = document.createElement('li');
            const completada = tarea.completada ? 'X' : ' ';
            li.textContent = `${tarea.id}. ${completada} ${tarea.descripcion}`;
            listaTareas.appendChild(li);
        }
    }
}

