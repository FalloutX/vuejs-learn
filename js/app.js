var helloVueComponent = new Vue({
  el: '#app',
  data: {
    message: 'Learning Vue.js'
  }
});

var todoListComponent = new Vue({
  el: '#todo-list',
  data: {
    newTodo: '',
    todos: [
      {text: 'Learning Vue.js'},
      {text: 'Build Something!'},
      {text: 'It could be good!'}
    ]
  },
  methods: {
    addTodo: function addTodo () {
      var text = this.newTodo.trim();
      if(text) {
        this.todos.push({text: text});
        this.newTodo = '';
      }
    },
    removeTodo: function removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
});
