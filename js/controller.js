function Controller(model) {
  this.view = new View(model, this);
  this.model = model;
  this.init();
}
Controller.prototype.init = function() {
  this.view.render(this.model.listaTareas);
};
Controller.prototype.addItem = function(item) {
  var tarea = new Tarea(item);
  this.model.listaTareas.add(tarea);
  this.view.render(this.model.listaTareas);
};
Controller.prototype.removeItem = function(index) {
  this.model.listaTareas.remove(index);
  this.view.render(this.model.listaTareas);
};
Controller.prototype.toggleItem = function(index) {
  console.log(index);
  this.model.listaTareas.toggle(index);
  this.view.render(this.model.listaTareas);
};
