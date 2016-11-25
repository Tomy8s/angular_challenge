toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory) {

  var self = this;

  // set an attribute
  self.todos = ToDoService.getAll();

  self.addToDo = function(toDoText) {
    self.todos.push(new ToDoFactory(toDoText));
  };

  self.deleteToDo = function(index) {
    self.todos.splice(index, 1);
  };

}]);
