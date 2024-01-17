class ListaTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(descripcion) {
        const nuevaTarea = new Tarea(this.tareas.length + 1, descripcion, false);
        this.tareas.push(nuevaTarea);
        return nuevaTarea;
    }

    marcarComoCompletada(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
        }
    }
    
    obtenerTareas() {
        return this.tareas;
    }
}
