var Model = (function(storage){
  const storeId = 'taskData';
  let taskList = [];
  
  function save(data) {
    storage.setItem(storeId, JSON.stringify(data));
  }

  function load() {
    return JSON.parse(storage.getItem(storeId));
  }

  function Model() {
    taskList = load() || [];
  }

  Model.prototype = {
    add(task) {
      taskList.push(task);
      save(taskList)
    },
    remove(index) {
      taskList.splice(index, 1);
      save(taskList)
    },
    getAll() {
      return taskList;
    }
  }
  return Model;
})(localStorage);