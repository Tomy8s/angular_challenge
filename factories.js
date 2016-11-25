toDoApp.factory('ToDoFactory', function() {

    function ToDo (toDoText) {
        this.text = toDoText;
        this.completed = false;
    }
    
    return ToDo
});
//     return {
//         addToDo: function(task) {
//             var newTask = {task: task, completed: false};
//             self.todos.push(newTask);
//         },
//         deleteToDo = function(index) {
//             self.todos.splice(index, 1);
//         },
//         comlpeteToDo = function(index) {
//             var selectedTodo = self.todos[index];
//             selectedTodo.completed = true;
//         }
//     };
// });