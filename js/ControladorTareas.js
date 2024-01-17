class ControladorTareas {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarTarea(descripcion) {
        const nuevaTarea = this.modelo.agregarTarea(descripcion);
        this.actualizarVista();
        return nuevaTarea;
    }

    marcarComoCompletada(id) {
        this.modelo.marcarComoCompletada(id);
        this.actualizarVista();
    }

    actualizarVista() {
        const tareas = this.modelo.obtenerTareas();
        this.vista.mostrarTareas(tareas);
    }
}
