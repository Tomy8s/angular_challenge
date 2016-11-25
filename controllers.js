toDoApp.controller('ToDoController', function() {

  // set an attribute
  this.todos = [
    {task: "ToDo1", completed: true},
    {task: "Learn Angular", completed: false},
    {task:"Brush teeth", completed: false},
    {task:"Have breakfast", completed: true}
  ]
});
