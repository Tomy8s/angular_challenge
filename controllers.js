toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  var self = this;

  // set an attribute
  self.todos = [
    {task: "ToDo1", completed: true},
    {task: "Learn Angular", completed: false},
    {task:"Brush teeth", completed: false},
    {task:"Have breakfast", completed: true}
  ];

  self.addToDo = function(task) {
    self.todos.push(new ToDoFactory(task));
  };

  self.deleteToDo = function(index) {
    self.todos.splice(index, 1);    
  };

  self.complete = function(index) {
    self.todos[index];
  };
}]);
