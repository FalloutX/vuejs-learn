var vm = new Vue({
  el: '#app',
  data: {
    blackTheme: true,
    styleObjectA: {
      color: 'blue',
      backgroundColor: 'yellow'
    },
    styleObjectB: {
      backgroundColor: 'white',
      transform: 'rotateZ(4deg)'
    }
  },
  computed: {
    themeClass: function (){
      if(this.blackTheme) {
        return {'black': true, 'white': false};
      } else {
        return {'black': false, 'white': true};
      }
    }
  }
});
