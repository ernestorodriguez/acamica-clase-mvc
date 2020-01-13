function Tarea(tarea) {
  this.tarea = tarea;
  this.hecho = false;
}

Tarea.prototype.toggle = function() {
  this.hecho = !this.hecho;
};

function ListaTareas(tareasInicial) {
  var tareas = [...tareasInicial];

  this.toggle = function(index) {
    if (index == null) return;

    tareas[index].toggle();
  };

  this.remove = function(index) {
    tareas.splice(index, 1);
  };

  this.add = function(elemento) {
    tareas.push(elemento);
    console.log(this.getAll());
  };

  this.getAll = function() {
    return tareas;
  };
}