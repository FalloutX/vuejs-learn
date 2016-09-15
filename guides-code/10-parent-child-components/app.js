

Vue.component('child', {
  template: '#child-template',
  data: function(){
    return {
      msg: 'hello'
    };
  },
  methods: {
    notify: function(){
      if(this.msg.trim()){
        this.$dispatch('msg-child', this.msg);
        this.msg = '';
      }
    }
  }
});

const vm = new Vue({
  el: '#app',
  data: {
    messages: []
  },
  methods: {
    handleChildMsg: function(msg){
      this.messages.push(msg);
    }
  }
});

var child = vm.$refs.child;
console.log(child);
