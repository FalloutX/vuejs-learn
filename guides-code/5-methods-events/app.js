const vm = new Vue({
  el: '#app',
  data: {
    text: '',
    name: 'Inderjit'
  },
  methods: {
    greet: function(e){
      alert('Hello, ' + this.name + "!");
      alert(event.target.tagName); // event is the native DOM event
    },
    say: function(msg) {
      alert(msg);
    },
    submitForm: function() {
      alert(this.text);
    }
  }
});
