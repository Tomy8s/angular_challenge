toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  var self = this;

  // set an attribute
  self.todos = [];

  self.addToDo = function(toDoText) {
    self.todos.push(new ToDoFactory(toDoText));
  };

  self.deleteToDo = function(index) {
    self.todos.splice(index, 1);
  };
  
}]);
