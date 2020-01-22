var View = (function(){
  const $modal = $('[data-js="modal"]');
  const $closeModalButton = $('[data-js="close-modal"]');
  const $addButton = $('[data-js="add-btn"]');
  const $input = $('[data-js="task-input"]');
  const $list = $('[data-js="task-list"]');
  const $quantity = $('[data-js="quantity"');
  
  const view = function(controller) {
    this.controller = controller;
    this.addListeners();
  };

  view.prototype = {
    addListeners() {
      $addButton.click(() => {
        this.addHandler();
      });
      $closeModalButton.click(() => {
        this.closeModalHandler();
      });
    },
    addHandler() {
      const value = $input.val();
      if(value) {
        this.controller.addTask(value);
        $input.val('');
        $modal.fadeIn(300);
        $quantity.text( $list.children().length);
      }
    },
    closeModalHandler() {
      $modal.fadeOut(300);
    },
    render(taskList) {
      $list.empty();
      taskList.forEach(task => {
        this.createElement(task);
      });
    },
    createElement(tarea) {
      $list.append(`<li>${tarea}</li>`);
    }
  }
  return view;
})();