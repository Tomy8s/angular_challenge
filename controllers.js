toDoApp.controller('ToDoController', function() {

  var self = this;

  // set an attribute
  self.todos = [
    {task: "ToDo1", completed: true},
    {task: "Learn Angular", completed: false},
    {task:"Brush teeth", completed: false},
    {task:"Have breakfast", completed: true}
  ];

  self.addToDo = function(task) {
    var newTask = {task: task, completed: false};
    self.todos.push(newTask);
  };

  self.deleteToDo = function(task) {
    self.todos.splice(task, 1);
  };
});
