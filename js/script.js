function init() {
  const model = {
    listaTareas: new ListaTareas([new Tarea("primera"), new Tarea("second")])
  };
  const controller = new Controller(model);
  console.log({ controller, model });
}

window.onload = init;
