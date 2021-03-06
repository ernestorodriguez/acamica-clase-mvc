function View(data, controller) {
  this.controller = controller;
  this.data = data;
  this.modal = document.getElementById("modal");
  const addButton = document.getElementById("addBtn");
  const modalClose = document.getElementById("close-modal");
  addButton.onclick = e => {
    var textInput = document.getElementById("myInput");
    this.controller.addItem(textInput.value);
    textInput.value = "";
  };
  modalClose.onclick = e => {
    modal.style.display = 'none';
  };
  this.render();
}

View.prototype = {
  crearElementoTarea: function(tarea, index) {
    var li = document.createElement("li");

    var textNode = document.createTextNode(tarea.tarea);
    li.appendChild(textNode);
    li.setAttribute("data-index", index);
    li.className = tarea.hecho ? "checked" : "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.onclick = e => {
      var index = e.target.getAttribute("data-index");
      this.controller.toggleItem(index);
    };

    span.onclick = e => {
      var index = e.target.parentNode.getAttribute("data-index");
      this.controller.removeItem(index);
    };

    li.appendChild(span);
    return li;
  },
  render: function() {
    document.getElementById("myUL").innerHTML = "";
    this.data.listaTareas.getAll().forEach((tarea, index) => {
      var elementoTarea = this.crearElementoTarea(tarea, index);
      document.getElementById("myUL").appendChild(elementoTarea);
    });
    document.getElementById("cuantity").innerHTML = this.data.listaTareas.getAll().length;
    this.modal.style.display = 'block';
  }
};
