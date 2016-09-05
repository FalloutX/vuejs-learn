const recv = Vue.extend({
  props: ['parentMsg', 'ject'],
  data: function(){
    console.log(this.ject.a, this.ject.b);
    var temp = this.ject.a;
    this.ject.a = this.ject.b;
    this.ject.b = temp;
    console.log(this.ject.a, this.ject.b);
    return this.ject;
  },
  template: `<div> Msg from the Parent: {{parentMsg}}
            <p> {{ject.a}} | {{ject.b}}</p>
             </div>`
});

Vue.component('recv-comp', recv);
const vm = new Vue({
  el: '#app',
  data: {
    grack: {
      a: 2,
      b: 6
    }
  }
});
