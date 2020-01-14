
function updateList(listTareas) {
  document.getElementById("myUL").innerHTML = "";
  listTareas.getAll().forEach((tarea, index) => {
    var elementoTarea = crearElementoTarea(tarea, index);
    document.getElementById("myUL").appendChild(elementoTarea);
  });
}

function crearElementoTarea(tarea, index) {
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
}

function updateQuantity(listTareas) {
  document.getElementById("cuantity").innerHTML = listTareas.getAll().length;
}

function showModal() {
  document.getElementById("modal").style.display = 'block';
}


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
  
  this.onUpdateView = new Subject();

  this.onUpdateView.addObserver(new Observer(updateList));
  this.onUpdateView.addObserver(new Observer(updateQuantity));
  this.onUpdateView.addObserver(new Observer(showModal));

  this.render = this.onUpdateView.notify.bind(this.onUpdateView);
}

View.prototype = {
  render: function() {}
};



