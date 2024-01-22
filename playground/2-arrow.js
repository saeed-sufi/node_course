const tasks = {
  tasks: [{
    text: 'Grocery',
    completed: true
  },
    {
      text: 'Clean Yard',
      completed: false
    }, {
      text: 'Film course',
      completed: false
    }],
  getTasksToDo() {
    return incompletedTasks = this.tasks.filter((task) => task.completed == false)
    
  }
}

console.log(tasks.getTasksToDo())

