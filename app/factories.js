toDoApp.factory('ToDoFactory', function() {

    var Todo = function(toDoText, toDoCompleted = false) {
      this.text = toDoText;
      this.completed = toDoCompleted;
    }

    Todo.prototype.complete = function () {
      this.completed = true;
    };

    return Todo;
});
