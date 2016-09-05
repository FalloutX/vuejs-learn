const childComp = Vue.extend({
  props: {
    pid: {
      type: Number,
      required: true
    }
  },
  template: `<div>
               <h6>Child Version of data.uid: {{pid}}</h6>
               <input type="number" name="pid" id="pidInput" v-model="pid">
             </div>`
});

Vue.component('child', childComp);
const vm = new Vue({
  el: '#app',
  data: {
    uid: 35
  }
});
