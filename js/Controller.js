var Controller = (function(){
  const controller = function(model) {
    this.model = model;
    this.view = new View(this);
    this.updateView();
  };

  controller.prototype = {
    addTask(task) {
      this.model.add(task);
      this.updateView();
    },
    removeTask(index) {
      this.model.remove(index);
      this.updateView();
    },
    updateView() {
      this.view.render(this.model.getAll());
    }
  }

  return controller;
})();